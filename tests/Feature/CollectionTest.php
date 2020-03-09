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

use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;

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
        $this->matrix       = \Facades\MatrixFactory::withName('Posts')->asCollection()->withFieldset($this->fieldset)->create();
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group collection
     */
    public function a_user_with_permissions_can_create_a_new_entry()
    {
        $this->actingAs($this->admin, 'api');

        $attributes = [
            'name'    => ($name = $this->faker->word),
            'slug'    => Str::slug($name),
            'excerpt' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status'  => true
        ];

        $this
            ->json('POST', '/api/collections/posts', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('mx_posts', $attributes);
    }

    /**
     * @test
     * @group fusioncms
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
     * @group matrix
     * @group collection
     */
    public function a_user_without_permissions_cannot_create_new_entries()
    {
        $this->expectException(AuthorizationException::class);
        
        $this->actingAs($this->user, 'api');

        $this->json('POST', '/api/collections/posts', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group collection
     */
    public function a_user_with_permissions_can_update_an_existing_entry()
    {
        $this->actingAs($this->admin, 'api');

        list($entry, $attributes) = $this->newEntry([
            'name' => 'New Post Title',
            'slug' => 'new-post-title',
        ]);

        // Update ----
        $attributes['name'] = 'Updated Post Title';
        $attributes['slug'] = 'updated-post-title';

        $this
            ->json('PATCH', '/api/collections/posts/' . $entry->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas('mx_posts', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group collection
     */
    public function a_user_with_permissions_can_delete_an_existing_entry()
    {
        $this->actingAs($this->admin, 'api');

        list($entry, $attributes) = $this->newEntry();

        // Delete ----
        $this->json('DELETE', '/api/collections/posts/' . $entry->id);

        $this->assertDatabaseMissing('mx_posts', [ 'id' => $entry->id ]);
    }

    /**
     * @test
     * @group feature
     * @group matrix
     * @group collection
     */
    public function each_collection_must_have_a_unique_slug()
    {
        $this->actingAs($this->admin, 'api');

        list($entry, $attributes) = $this->newEntry();

        $this
            ->json('POST', '/api/collections/posts', $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
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
            'name'    => ($name = $this->faker->word),
            'slug'    => Str::slug($name),
            'excerpt' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status'  => $this->faker->boolean
        ], $overrides);

        $entry = $this
            ->json('POST', '/api/collections/posts', $attributes)
            ->getData()
            ->data->entry;

        return [$entry, $attributes];
    }
}
