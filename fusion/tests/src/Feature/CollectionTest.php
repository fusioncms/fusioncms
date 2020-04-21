<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CollectionTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->section      = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->fieldExcerpt = \Facades\FieldFactory::withName('Excerpt')->withSection($this->section)->create();
        $this->fieldContent = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($this->section)->create();
        $this->fieldset     = \Facades\FieldsetFactory::withName('General')->withSections(collect([$this->section]))->create();
        $this->matrix       = \Facades\MatrixFactory::withName('Posts')->asCollection()->withFieldset($this->fieldset)->withRoute('posts/{slug}')->withTemplate('index')->create();
        $this->model        = (new \Fusion\Services\Builders\Collection($this->matrix->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_with_permissions_can_create_a_new_entry()
    {
        $attributes = [
            'name'    => 'Example Page',
            'slug'    => 'example-page',
            'excerpt' => 'This is an excerpt of the content.',
            'content' => 'This is the content. Lorem ipsum dolor sit amit.',
            'status'  => 1
        ];

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/collections/posts', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('mx_posts', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_without_control_panel_access_cannot_create_new_entries()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/collections/posts', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_without_permissions_cannot_create_new_entries()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/collections/posts', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_with_permissions_can_update_an_existing_entry()
    {
        list($entry, $attributes) = $this->newEntry([
            'name' => 'New Post Title',
            'slug' => 'new-post-title',
        ]);

        // Update ----
        $attributes['name'] = 'Updated Post Title';
        $attributes['slug'] = 'updated-post-title';

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/collections/posts/' . $entry->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas('mx_posts', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_with_permissions_can_delete_an_existing_entry()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->be($this->admin, 'api')
            ->json('DELETE', '/api/collections/posts/' . $entry->id);

        $this->assertDatabaseMissing('mx_posts', [ 'id' => $entry->id ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function each_collection_must_have_a_unique_slug()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/collections/posts', $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_without_admin_settings_can_view_an_enabled_entry()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->be($this->user)
            ->get('/posts/' . $entry->slug)
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_without_admin_settings_cannot_view_a_disabled_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->user)
            ->get('/posts/' . $entry->slug);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_with_admin_settings_cannot_view_a_disabled_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->admin)
            ->get('/posts/' . $entry->slug);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_with_admin_settings_can_preview_a_disabled_entry()
    {
        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->admin)
            ->get('/posts/' . $entry->slug . '?preview=true')
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group collection
     */
    public function a_user_without_admin_settings_cannot_preview_a_disabled_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->user)
            ->get('/posts/' . $entry->slug . '?preview=true');
    }

    //
    // ------------------------------------------------
    //

    /**
     * Returns new entry w/ attributes
     * [Helper]
     *
     * @param  array  $overrides
     * @return array
     */
    protected function newEntry($overrides = []): array
    {
        $attributes = array_merge([
            'name'    => 'Example Page',
            'slug'    => 'example-page',
            'excerpt' => 'This is the excerpt of the content.',
            'content' => 'This is the content. Lorem ipsume dolor sit amit.',
            'status'  => true
        ], $overrides);

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/collections/posts', $attributes);

        $entry = \DB::table($this->model->getTable())->first();

        return [$entry, $attributes];
    }
}
