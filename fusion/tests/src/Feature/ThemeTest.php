<?php

namespace Fusion\Tests\Feature;

use ZipArchive;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Caffeinated\Themes\Facades\Theme;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ThemeTest extends TestCase
{
	use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();

        Storage::fake('themes');
    }

    /**
     * @test
     * @group fusioncms
     * @group themes
     */
	public function a_user_with_permission_can_upload_a_theme()
	{
		$this->actingAs($this->admin, 'api');

		list($themePath, $themeName) = $this->generateTheme();

		$response = $this->json(
		    'POST',
		    '/api/themes',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, true, true)
		    ]
		)->assertStatus(201);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group themes
	 */
	public function a_user_with_permission_can_set_currently_active_theme()
	{
		$this->actingAs($this->admin, 'api');

		Theme::push(collect([
			'name'        => 'Test Theme',
			'slug'        => 'test_theme',
			'description' => 'A temporary theme for testing purposes.',
			'author'      => 'efelle creative',
			'version'     => '1.0.0',
			'settings'    => [],
		]));

		$this
			->json('PATCH', '/api/theme/test_theme')
			->assertStatus(200);

		$this->assertEquals(setting('system.theme'), 'test_theme');
	}

	/**
     * @test
     * @group fusioncms
     * @group themes
     */
	public function a_guest_cannot_not_upload_a_theme()
	{
		$this->expectException(AuthenticationException::class);

        $response = $this->json('POST', '/api/themes')
        	->assertStatus(422);
	}

	/**
     * @test
     * @group fusioncms
     * @group themes
     */
	public function an_uploaded_theme_must_have_its_required_files()
	{
		$this->actingAs($this->admin, 'api');

		list($themePath, $themeName) = $this->generateTheme('Hello', false);

		$response = $this->json(
		    'POST',
		    '/api/themes/verify',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, true, true)
		    ]
		)
		->assertStatus(422)
		->assertJsonValidationErrors(['file-upload' => 'A theme requires the following files: theme.json, preview.png.']);
	}

	/**
     * @test
     * @group fusioncms
     * @group themes
     */
	public function an_uploaded_theme_cannot_have_the_same_name_as_an_existing_theme()
	{
		$this->actingAs($this->admin, 'api');

		list($themePath, $themeName) = $this->generateTheme('Hello');

		$response = $this->json(
		    'POST',
		    '/api/themes/verify',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, true, true)
		    ]
		)
		->assertStatus(422)
		->assertJsonValidationErrors(['file-upload' => 'A Theme with matching name already exists.']);
	}

	/**
	 * Generate fake theme zip for testing..
	 * [helper]
	 *
	 * @param  string $themeName
	 * @return string
	 */
	private function generateTheme($themeName = null, $includesRequirements = true)
	{
		$zipArchive = new ZipArchive;
		$themeName  = $themeName ?? $this->faker->word;
		$themePath  = Storage::disk('themes')->path($themeName . '.zip');

		$settings = [
			'name'        => $themeName,
			'slug'        => Str::slug($themeName),
			'description' => $this->faker->text,
			'author'      => $this->faker->name,
			'version'     => '1.0.0',
		];

		if ($zipArchive->open($themePath, ZipArchive::CREATE) === TRUE) {
			$zipArchive->addEmptyDir($themeName);
			$zipArchive->addFromString($themeName . '/random.txt', Str::random());

			if ($includesRequirements) {
				$zipArchive->addFromString($themeName . '/preview.png', UploadedFile::fake()->image('preview.png'));
				$zipArchive->addFromString($themeName . '/theme.json', collect($settings)->toJson());
			}

			$zipArchive->close();
		}

		return [$themePath, $themeName];
	}
}