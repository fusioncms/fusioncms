<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DirectoryTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->directoryA = \Facades\DirectoryFactory::withName('Lorem')->create();
        $this->directoryB = \Facades\DirectoryFactory::withName('Dolor')->create();
        $this->directoryC = \Facades\DirectoryFactory::withName('Ipsum')->withParent($this->directoryA)->create();
        $this->directoryD = \Facades\DirectoryFactory::withName('Sit')->withParent($this->directoryA)->create();
        $this->directoryE = \Facades\DirectoryFactory::withName('Amet')->withParent($this->directoryB)->create();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function a_user_with_permissions_can_create_directories()
    {
        $this
            ->be($this->admin, 'api')
            ->json('POST', 'api/directories', [ 'name' => 'Test Folder' ])
            ->assertStatus(201);

        $this->assertDatabaseHas('directories', [
            'name' => 'Test Folder',
            'slug' => 'test-folder'
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function activity_will_be_tracked_when_directory_is_created()
    {
        $this
            ->be($this->admin, 'api')
            ->json('POST', 'api/directories', [ 'name' => 'Test Folder' ]);

        $this->assertDatabaseHas('activity_log', [
            'description' => 'Created folder (Test Folder)',
            'causer_id'   => $this->admin->id,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function activity_will_be_tracked_when_directory_is_updated()
    {
        $this
            ->be($this->admin, 'api')
            ->json('PATCH', 'api/directories/' . $this->directoryA->id, [
                'name' => 'Updated Name'
            ]);

        $this->assertDatabaseHas('activity_log', [
            'description' => 'Updated folder (Updated Name)',
            'causer_id'   => $this->admin->id,
            'subject_id'  => $this->directoryA->id,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function activity_will_be_tracked_when_directory_is_deleted()
    {
        $this
            ->be($this->admin, 'api')
            ->json('DELETE', 'api/directories/' . $this->directoryA->id);

        $this->assertDatabaseHas('activity_log', [
            'description' => 'Deleted folder (Lorem)',
            'causer_id'   => $this->admin->id,
            'subject_id'  => $this->directoryA->id,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function a_user_without_control_panel_access_cannot_create_new_directories()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/directories', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function a_user_without_permissions_cannot_create_new_directories()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/directories', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function a_user_with_permissions_can_rename_directories()
    {
        $this
            ->be($this->admin, 'api')
            ->json('PATCH', 'api/directories/' . $this->directoryA->id, [
                'name' => 'Updated Name'
            ])
            ->assertStatus(200);

        $this->assertDatabaseHas('directories', [
            'name' => 'Updated Name',
            'slug' => 'updated-name'
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function a_user_with_permissions_can_delete_directories()
    {
        // delete directory..
        $this
            ->be($this->admin, 'api')
            ->json('DELETE', 'api/directories/' . $this->directoryA->id)
            ->assertStatus(200);

        // assert directory was removed..
        $this->assertDatabaseMissing('directories', [ 'id' => $this->directoryA->id ]);

        // assert children were removed..
        $this->assertDatabaseMissing('directories', [ 'id' => $this->directoryC->id ]);
        $this->assertDatabaseMissing('directories', [ 'id' => $this->directoryD->id ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function directories_can_be_searched_by_name()
    {
        $this->actingAs($this->admin, 'api');

        $response = $this->json('GET', '/api/directories?filter[search]=lor');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'Lorem'));
        $this->assertCount(1, $data->where('name', 'Dolor'));

        $response = $this->json('GET', '/api/directories?filter[search]=lorem');
        $data     = collect($response->getData()->data);

        $this->assertCount(1, $data);
        $this->assertCount(1, $data->where('name', 'Lorem'));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function directories_can_be_searched_by_parent()
    {
        $this->actingAs($this->admin, 'api');

        $response = $this->json('GET', '/api/directories');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'Lorem'));
        $this->assertCount(1, $data->where('name', 'Dolor'));

        $response = $this->json('GET', '/api/directories?filter[parent_id]=1');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'Ipsum'));
        $this->assertCount(1, $data->where('name', 'Sit'));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function directories_must_have_a_unique_parent_id_and_slug_combination()
    {
        $directory       = $this->directoryA->toArray();
        $directory['id'] = null;

        $this
            ->be($this->admin, 'api')
            ->json('POST', 'api/directories', $directory)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function directories_can_have_duplicate_slugs_with_a_different_parent_id()
    {
        $directory = $this->directoryA->toArray();
        $directory['id'] = null;
        $directory['parent_id'] = 99;

        $this
            ->be($this->admin, 'api')
            ->json('POST', 'api/directories', $directory)
            ->assertStatus(201);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group directory
     */
    public function a_directory_cannot_be_moved_to_another_directory_with_a_conflicting_slug()
    {
        // Create two directories (A1/A2) w/ same slug in diff folders
        $directoryA1 = factory(\Fusion\Models\Directory::class)->create(['slug' => 'folder-a']);
        $directoryA2 = factory(\Fusion\Models\Directory::class)->create(['slug' => 'folder-a', 'parent_id' => $directoryA1->id]);
        $directoryB1 = factory(\Fusion\Models\Directory::class)->create(['slug' => 'folder-b', 'parent_id' => $directoryA1->id]);

        // Attempt to combine directories in same location
        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/files/move', [
                'directory' => $directoryA1->parent_id,
                'moving'    => [
                    'files'       => [],
                    'directories' => [
                        $directoryA2->id,
                        $directoryB1->id,
                    ]
                ]
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['moving']);

        // assert db records are correct..
        $this->assertDatabaseHas('directories', ['slug' => 'folder-a', 'parent_id' => $directoryA1->id]);
        $this->assertDatabaseHas('directories', ['slug' => 'folder-b', 'parent_id' => 0]);
    }
}