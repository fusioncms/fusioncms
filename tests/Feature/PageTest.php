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
use Illuminate\Foundation\Testing\RefreshDatabase;

class PageTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_update_a_page()
    {
        $this->actingAs($this->admin, 'api');

        $page = MatrixFactory::asPage()->create();

        $formData = [
            'status' => true,
        ];

        $response = $this->json('PATCH', '/api/pages/' . $page->id, $formData);
        $response->assertStatus(200);
    }

    /** @test */
    public function name_handle_and_slug_values_are_proxied_from_the_owning_matrix()
    {
        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::asPage()->withName('Example Page')->create();

        $page = (new Page($matrix->handle))->get();

        $this->assertEquals($page->name, 'Example Page');
        $this->assertEquals($page->slug, 'example-page');
        $this->assertEquals($page->handle, 'example_page');
    }
}
