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
		$this->withoutExceptionHandling();
        
        $this->actingAs($this->admin, 'api');
        
        $response = $this->json(
        	'POST',
        	'/api/imports',
        	factory(Import::class)->make()->toArray()
       	);

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
	public function a_user_with_permission_can_update_an_import()
	{
        $this->actingAs($this->admin, 'api');

        $import = ImportFactory::create();

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