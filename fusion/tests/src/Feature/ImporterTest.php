<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Import;
use Facades\ImportFactory;
use Fusion\Tests\TestCase;
use Fusion\Services\Imports\PreviewImport;
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
        $this->actingAs($this->admin, 'api');

        $response = $this->json(
            'POST',
            '/api/imports',
            factory(Import::class)->make()->toArray()
        )->assertStatus(201);
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
        )->assertStatus(422);
	}

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
    public function an_import_cannot_not_create_with_disable_and_delete_strategies()
    {
        $this->actingAs($this->admin, 'api');

        $response = $this->json(
            'POST',
            '/api/imports',
            factory(Import::class)->make(['strategy' => ['disable','delete']])->toArray()
        )
        ->assertJsonValidationErrors('strategy')
        ->assertStatus(422);
    }

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
    public function a_mapping_preview_will_be_generated_on_import_mapping_page()
    {
        $this->actingAs($this->admin, 'api');

        $import = factory(Import::class)->states('users')->create([
            'preview'  => [],
            'mappings' => []
        ]);

        $this->json(
            'GET',
            '/api/imports/mapping/' . $import->id,
        );

        $this->assertEquals([
                ['ID', 'Name', 'Email', 'Password', 'Status'],
                [1, 'Mrs. Nora Hickle', 'boyer.alberto@example.org', 'r22S3q0cED#t+U+s', 1]
        ], $import->fresh()->preview->toArray());
    }

	/**
     * @test
     * @group fusioncms
     * @group imports
     */
	public function a_user_with_permission_can_update_an_import()
	{
        $this->actingAs($this->admin, 'api');

        $import = factory(Import::class)->create();

        $attributes           = $import->toArray();
        $attributes['name']   = 'Updated Name';
        $attributes['handle'] = str_handle($attributes['name']);

        // ..when PATCH request submitted
        // ..assert 200 status response
        $response = $this->json(
            'PATCH',
            '/api/imports/' . $import->id,
            $attributes
        )->assertStatus(200);

        // ..assert data was persisted.
        $this->assertDatabaseHas('imports', [
            'name'   => 'Updated Name',
            'handle' => 'updated_name'
        ]);
	}

	/**
     * @test
     * @group fusioncms
     * @group imports
     */
	public function a_user_with_permission_can_delete_an_import()
	{
        $this->actingAs($this->admin, 'api');

        $import = factory(Import::class)->create();

        $response = $this->json(
            'DELETE',
            '/api/imports/' . $import->id
        )->assertStatus(200);
	}
}