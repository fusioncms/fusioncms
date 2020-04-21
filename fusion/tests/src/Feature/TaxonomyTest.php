<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TaxonomyTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function a_user_with_permissions_can_create_a_new_taxonomy()
    {
        $attributes = [
            'name'    => ($name = 'Example Page'),
            'handle'  => str_handle($name),
            'slug'    => Str::slug($name),
            'sidebar' => '0',
        ];

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/taxonomies', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('taxonomies', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function a_user_without_permissions_can_not_create_a_new_taxonomy()
    {
        $this->expectException(AuthenticationException::class);

        $response = $this->json('POST', '/api/taxonomies', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function a_user_without_permissions_cannot_create_new_taxonomies()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/taxonomies', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function a_user_with_permissions_can_update_an_existing_taxonomy()
    {
        $taxonomy = factory(Taxonomy::class)->create();

        // update ----
        $attributes           = $taxonomy->toArray();
        $attributes['name']   = 'New Name';
        $attributes['handle'] = 'new_name';
        $attributes['slug']   = 'new-name';

        unset($attributes['created_at'], $attributes['updated_at']);

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/taxonomies/' . $taxonomy->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas('taxonomies', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function each_taxonomy_must_have_a_valid_handle()
    {
        $attributes = [
            'name'    => ($name = 'Example Page'),
            'handle'  => '--invalid-handle',
            'slug'    => Str::slug($name),
            'sidebar' => '0',
        ];

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/taxonomies', $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'handle' => 'Handle must contain only letters, numbers, and underscores.'
            ]);

    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function each_taxonomy_must_have_a_unique_slug_and_handle()
    {
        $taxonomy = factory(Taxonomy::class)->create()->toArray();
        $taxonomy['id'] = null;

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/taxonomies', $taxonomy)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug', 'handle']);
    }

    /**
     * @test
     * @group feature
     * @group validation
     * @group taxonomy
     */
    public function taxonomy_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('POST', '/api/taxonomies', [ 'handle' => 'default' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);

        $this
            ->json('POST', '/api/taxonomies', [ 'handle' => 'for' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);

        $this
            ->json('POST', '/api/taxonomies', [ 'handle' => 'true' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);
    }
}
