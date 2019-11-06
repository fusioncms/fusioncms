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

use App\Models\Import;
use Facades\ImportFactory;
use Tests\Foundation\TestCase;
use App\Services\Imports\PreviewImport;
use Illuminate\Support\Facades\Storage;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ImporterTest extends TestCase
{
	use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
	public function a_user_with_permission_can_create_an_import()
	{
        Storage::fake();

        $this->actingAs($this->admin, 'api');

        $attributes = factory(Import::class)->states('users')->make()->toArray();

        $response = $this->json('POST', '/api/imports', $attributes);
        
        $response->assertStatus(201);
	}

	/**
     * @test
     * @group fusioncms
     * @group imports
     */
	public function a_guest_cannot_not_create_an_import()
	{
		$this->expectException(AuthenticationException::class);

        $response = $this->json(
            'POST',
            '/api/imports',
            factory(Import::class)->make()->toArray()
        );

        $response->assertStatus(422);
	}

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
    public function a_preview_will_be_generated_for_every_import_file()
    {
        $sample  = base_path('tests/Stubs/Importer/Users.csv');
        $preview = (new PreviewImport(1, 2))->toArray($sample);
        $preview = $preview[0];  // We'll only acknowledge sheet 1
        
        $this->assertEquals(
            [
                ['id', 'name', 'email', 'role', 'status'],
                [1, 'Janet Doe', 'admin@example.com', 'admin', 1]
            ], $preview);
    }

	/**
     * @test
     * @group fusioncms
     * @group imports
     */
	public function a_user_with_permission_can_update_an_import()
	{
        Storage::fake();

        $this->actingAs($this->admin, 'api');

        $import = factory(Import::class)->create([
            'location' => base_path('tests/Stubs/Importer/Users.csv')
        ]);

        $data           = $import->toArray();
        $data['name']   = "Updated name";
        $data['handle'] = str_handle($data['name']);
        
        $response = $this->json(
        	'PATCH',
        	'/api/imports/' . $import->id,
        	$data
       	);

        $response->assertStatus(200);
	}

	/**
     * @test
     * @group fusioncms
     * @group imports
     */
	public function a_user_with_permission_can_delete_an_import()
	{
        $this->actingAs($this->admin, 'api');

        $import = ImportFactory::create();
        
        $response = $this->json('DELETE', '/api/imports/' . $import->id);

        $response->assertStatus(200);
	}
}