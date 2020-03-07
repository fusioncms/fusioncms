<?php

namespace Tests\Feature;

use App\Models\Directory;
use Facades\DirectoryFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DirectoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group feature
     * @group directory
     */
    public function a_user_with_permissions_can_create_directories()
    {
        $this->actingAs($this->admin, 'api');

        $response = $this->json('POST', 'api/directories', [
            'name' => 'Test Folder',
        ]);

        $response->assertStatus(201);

        $this->assertDatabaseHas('directories', ['name' => 'Test Folder', 'slug' => 'test-folder']);
    }

    /**
     * @test
     * @group feature
     * @group directory
     */
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

    /**
     * @test
     * @group feature
     * @group directory
     */
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


    public function a_user_with_permissions_can_move_directories_inside_other_directories()
    {
        $this->actingAs($this->admin, 'api');

        $this->json('POST', 'api/directories', [
            'name' => 'First Folder',
        ]);

        $this->json('POST', 'api/directories', [
            'name' => 'Second Folder',
        ]);

        $response = $this->json('POST', 'api/directories/2/move', [
            'directory_id' => 1
        ]);
        
        $response->assertStatus(200);

        $this->assertDatabaseHas('directories', ['name' => 'Second Folder', 'parent_id' => 1]);
    }


    public function a_user_with_permissions_can_move_directories_to_the_root()
    {
        $this->actingAs($this->admin, 'api');

        $this->json('POST', 'api/directories', [
            'name' => 'First Folder',
        ]);

        $this->json('POST', 'api/directories', [
            'name'      => 'Second Folder',
            'parent_id' => 1,
        ]);

        $response = $this->json('POST', 'api/directories/2/move', [
            'directory_id' => null
        ]);
        
        $response->assertStatus(200);

        $this->assertDatabaseHas('directories', ['name' => 'Second Folder', 'parent_id' => null]);
    }


    public function directories_can_be_searched_by_name()
    {
        $this->actingAs($this->admin, 'api');

        DirectoryFactory::withName('lorem')->create();
        DirectoryFactory::withName('ipsum')->create();
        DirectoryFactory::withName('dolor')->create();
        DirectoryFactory::withName('sit')->create();
        DirectoryFactory::withName('amet')->create();
        DirectoryFactory::withName('do')->create();

        $response = $this->json('GET', '/api/directories?search=do');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'do'));
        $this->assertCount(1, $data->where('name', 'dolor'));

        $response = $this->json('GET', '/api/directories?search=dolor');
        $data     = collect($response->getData()->data);

        $this->assertCount(1, $data);
        $this->assertCount(1, $data->where('name', 'dolor'));
    }

    /**
     * @test
     * @group feature
     * @group directory
     */
    public function directories_must_have_a_unique_parent_id_and_slug_combination()
    {
        $this->actingAs($this->admin, 'api');

        // mimic an insert w/ duplicate data..
        $directory = DirectoryFactory::withName('lorem')->create();
        $directory = $directory->toArray();
        $directory['id'] = null;

        $this
            ->json('POST', 'api/directories', $directory)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    /**
     * @test
     * @group feature
     * @group directory
     */
    public function directories_can_have_duplicate_slugs_with_a_different_parent_id()
    {
        $this->actingAs($this->admin, 'api');

        $directory = DirectoryFactory::withName('lorem')->create();
        $directory = $directory->toArray();
        $directory['id'] = null;
        $directory['parent_id'] = 99;

        $response = $this
            ->json('POST', 'api/directories', $directory)
            ->assertStatus(201);
    }

    /**
     * @test
     * @group feature
     * @group directory
     */
    public function a_directory_cannot_be_moved_to_another_directory_with_a_conflicting_slug()
    {
        $this->actingAs($this->admin, 'api');

        // Create two directories (A1/A2) w/ same slug in diff folders
        $directoryA1 = factory(Directory::class)->create(['slug' => 'folder-a']);
        $directoryA2 = factory(Directory::class)->create(['slug' => 'folder-a', 'parent_id' => $directoryA1->id]);

        // dd(\DB::table('directories')->get());

        // Attempt to combine directories in same location
        $response = $this
            ->json('POST', '/api/files/move', [
                'directory' => $directoryA1->parent_id,
                'moving'    => [
                    'files'       => [],
                    'directories' => [ $directoryA2->id ]
                ]
            ]);
        dd($response->getContent());
            // ->assertStatus(422)
            // ->assertJsonValidationErrors(['slug']);
    }
}