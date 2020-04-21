<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;

class TermTest extends TestCase
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
        $this->taxonomy     = \Facades\TaxonomyFactory::withName('Tags')->withFieldset($this->fieldset)->create();
        $this->model        = (new \Fusion\Services\Builders\Taxonomy($this->taxonomy->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group term
     */
    public function a_user_with_permissions_can_create_a_new_term()
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
            ->json('POST', '/api/taxonomies/' . $this->taxonomy->slug, $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group term
     */
    public function a_user_without_control_panel_access_cannot_create_new_terms()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/taxonomies/' . $this->taxonomy->slug, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group term
     */
    public function a_user_without_permissions_cannot_create_new_terms()
    {
        $this->expectException(AuthorizationException::class);

        $this->actingAs($this->user, 'api');

        $this->json('POST', '/api/taxonomies/' . $this->taxonomy->slug, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group term
     */
    public function a_user_with_permissions_can_update_an_existing_term()
    {
        $this->actingAs($this->admin, 'api');

        list($term, $attributes) = $this->newTerm([
            'name' => 'New Term Name',
            'slug' => 'new-term-name',
        ]);

        // Update ----
        $attributes['name'] = 'Updated Slug Name';
        $attributes['slug'] = 'updated-slug-name';

        $this
            ->json('PATCH', '/api/taxonomies/' . $this->taxonomy->slug . '/' . $term->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas($this->model->getTable(), $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group term
     */
    public function a_user_with_permissions_can_delete_an_existing_term()
    {
        $this->actingAs($this->admin, 'api');

        list($term, $attributes) = $this->newTerm();

        // Delete ----
        $this->json('DELETE', '/api/taxonomies/' . $this->taxonomy->slug . '/' . $term->id);

        $this->assertDatabaseMissing($this->model->getTable(), [ 'id' => $term->id ]);
    }

    /**
     * @test
     * @group feature
     * @group feature
     * @group term
     */
    public function each_term_must_have_a_unique_slug()
    {
        $this->actingAs($this->admin, 'api');

        list($term, $attributes) = $this->newTerm();

        $this
            ->json('POST', '/api/taxonomies/' . $this->taxonomy->slug, $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    //
    // ------------------------------------------------
    //

    /**
     * Returns new term w/ attributes
     * [Helper]
     *
     * @param  array  $overrides
     * @return array
     */
    protected function newTerm($overrides = []): array
    {
        $attributes = array_merge([
            'name'    => ($name = $this->faker->word),
            'slug'    => Str::slug($name),
            'excerpt' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status'  => $this->faker->boolean
        ], $overrides);

        $term = $this
            ->json('POST', '/api/taxonomies/' . $this->taxonomy->slug, $attributes)
            ->getData()
            ->data;

        return [$term, $attributes];
    }
}
