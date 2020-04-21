<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageTest extends TestCase
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

        // --
        $this->section      = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->fieldExcerpt = \Facades\FieldFactory::withName('Excerpt')->withSection($this->section)->create();
        $this->fieldContent = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($this->section)->create();
        $this->fieldset     = \Facades\FieldsetFactory::withName('General')->withSections(collect([$this->section]))->create();
        $this->matrix       = \Facades\MatrixFactory::withName('Page')->asPage()->withFieldset($this->fieldset)->withRoute('{slug}')->withTemplate('index')->create();
        $this->model        = (new \Fusion\Services\Builders\Page($this->matrix->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_with_permissions_can_update_a_page()
    {
        $attributes = [
            'name'    => 'Example Page',
            'slug'    => 'example-page',
            'excerpt' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status'  => true
        ];

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/pages/' . $this->matrix->id, $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('mx_page', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_without_control_panel_access_cannot_update_a_page()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('PATCH', '/api/pages/' . $this->matrix->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_without_permissions_cannot_update_a_page()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/pages/' . $this->matrix->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_cannot_create_a_page_without_required_fields()
    {
        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'slug', 'status']);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_guest_can_visit_newly_created_page()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->get($entry->slug)
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_without_admin_settings_can_view_an_enabled_page()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->be($this->user)
            ->get($entry->slug)
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_without_admin_settings_cannot_view_a_disabled_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->user)
            ->get($entry->slug);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_with_admin_settings_cannot_view_a_disabled_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->admin)
            ->get($entry->slug);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_with_admin_settings_can_preview_a_disabled_entry()
    {
        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->admin)
            ->get($entry->slug . '?preview=true')
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group page
     */
    public function a_user_without_admin_settings_cannot_preview_a_disabled_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->user)
            ->get($entry->slug . '?preview=true');
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
            'excerpt' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status'  => true
        ], $overrides);


        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/pages/' . $this->matrix->id, $attributes);

        $entry = \DB::table($this->model->getTable())->first();

        return [$entry, $attributes];
    }
}
