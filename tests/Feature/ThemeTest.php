<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature;

use Theme;
use ZipArchive;
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Illuminate\Http\UploadedFile;
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
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, null, true)
		    ]
		)->assertStatus(201);
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
		    '/api/themes',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, null, true)
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
		    '/api/themes',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, null, true)
		    ]
		)
		->assertStatus(422)
		->assertJsonValidationErrors(['file-upload' => 'Theme cannot have the same `name` or `slug` as an existing theme.']);
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