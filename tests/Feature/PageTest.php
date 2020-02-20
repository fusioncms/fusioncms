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

use App\Models\Matrix;
use App\Models\Fieldset;
use Facades\MatrixFactory;
use Tests\Foundation\TestCase;
use App\Services\Builders\Page;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PageTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();

        $this->matrix = MatrixFactory::asPage()->withName('Example Page')->create();
        $this->model  = (new Page($this->matrix->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_update_a_page()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => true,
            ])->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), [
            'name' => 'Renamed-page',
            'slug' => 'renamed-page',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_permissions_can_not_update_a_page()
    {
        $this->expectException(AuthenticationException::class);

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => true,
            ])->assertStatus(422);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_cannot_create_a_page_without_required_fields()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'slug', 'status']);
    }
}
