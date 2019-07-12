<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature\API;

use App\Models\Matrix;
use App\Models\Fieldset;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MatrixPageTest extends TestCase
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

        $fieldset = factory(Fieldset::class)->create();

        $fieldset->sections->each(function ($section) {
            $section->fields()->saveMany(
                factory(Field::class, mt_rand(3, 10))->create([
                    'section_id' => $section->id,
                ])
            );
        });

        $page = factory(Matrix::class)->create([
            'type' => 'page',
        ]);
        
        $page->attachFieldset($fieldset);

        $formData = [
            'status' => true,
        ];

        $response = $this->json('PATCH', '/api/pages/' . $page->id, $formData);
        $response->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_column_is_created_when_adding_a_field()
    {
        // $this->actingAs($this->admin, 'api');

        // 
    }

    /**
     * @test
     */
    public function a_column_is_updated_when_renaming_a_field()
    {
        // $this->actingAs($this->admin, 'api');

        // 
    }

    /**
     * @test
     */
    public function the_column_is_deleted_when_removing_a_field()
    {
        // $this->actingAs($this->admin, 'api');

        // 
    }
}
