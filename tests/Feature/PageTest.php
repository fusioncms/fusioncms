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
        $this->matrix       = \Facades\MatrixFactory::withName('Page')->asPage()->withFieldset($this->fieldset)->create();
        $this->model        = (new \App\Services\Builders\Page($this->matrix->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group page
     */
    public function a_user_with_permissions_can_update_a_page()
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
            ->json('PATCH', '/api/pages/' . $this->matrix->id, $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('mx_page', $attributes);
    }

    /**
     * @test
     * @group fusioncms
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
     * @group matrix
     * @group page
     */
    public function a_user_without_permissions_cannot_update_a_page()
    {
        $this->expectException(AuthorizationException::class);
        
        $this->actingAs($this->user, 'api');

        $this->json('PATCH', '/api/pages/' . $this->matrix->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group page
     */
    public function a_user_cannot_create_a_page_without_required_fields()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'slug', 'status']);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group page
     */
    public function a_guest_can_visit_newly_created_page()
    {
        // Set matrix' routing info..
        $this->matrix->update([
            'route'    => '{slug}',
            'template' => 'index',
        ]);

        // Create page record..
        $page = $this->model->create([
            'matrix_id' => $this->matrix->id,
            'name'      => 'Foo',
            'slug'      => 'foo',
            'status'    => true,
        ]);

        $this->get($page->slug)->assertStatus(200);
    }
}
