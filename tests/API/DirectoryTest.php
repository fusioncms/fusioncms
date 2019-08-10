<?php

namespace Tests\API;

use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DirectoryTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_with_permissions_can_create_directories()
    {
        $this->actingAs($this->admin, 'api');

        $response = $this->json('POST', 'api/directories', [
            'name' => 'Test Folder',
        ]);
        
        $response->assertStatus(201);

        $this->assertDatabaseHas('directories', ['name' => 'Test Folder', 'slug' => 'test-folder']);
    }

    /** @test */
    public function a_user_with_permissions_can_rename_directories()
    {
        $this->actingAs($this->admin, 'api');

        $this->json('POST', 'api/directories', [
            'name' => 'Test Folder',
        ]);

        $response = $this->json('PATCH', 'api/directories/1', [
            'name' => 'New Folder Name'
        ]);
        
        $response->assertStatus(200);

        $this->assertDatabaseHas('directories', ['name' => 'New Folder Name', 'slug' => 'new-folder-name']);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_directories()
    {
        $this->actingAs($this->admin, 'api');

        $this->json('POST', 'api/directories', [
            'name' => 'Test Folder',
        ]);

        $response = $this->json('DELETE', 'api/directories/1');
        
        $response->assertStatus(200);

        $this->assertDatabaseMissing('directories', ['name' => 'Test Folder', 'slug' => 'test-folder']);
    }

    /** @test */
    public function a_user_with_permissions_can_move_directories()
    {
        $this->actingAs($this->admin, 'api');

        $this->json('POST', 'api/directories', [
            'name' => 'Parent Folder',
        ]);

        $this->json('POST', 'api/directories', [
            'name' => 'Child Folder',
        ]);

        $response = $this->json('PATCH', 'api/directories/2', [
            'parent_id' => 1
        ]);
        
        $response->assertStatus(200);

        $this->assertDatabaseHas('directories', ['name' => 'Child Folder', 'parent_id' => 1]);
    }
}