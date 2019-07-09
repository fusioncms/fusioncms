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

use App\Models\Field;
use App\Models\Matrix;
use App\Models\Section;
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

        // Create a matrix page
        $page = factory(Matrix::class)->create([
            'type' => 'page',
        ]);

        // Add sections to page
        $page->sections()->saveMany(
            factory(Section::class, 3)->create([
                'container_type' => Matrix::class,
                'container_id'   => $page->id,
            ])
        );

        // Add fields to each section
        $page->sections->each(function ($section) {
            $section->fields()->saveMany(
                factory(Field::class, mt_rand(3, 10))->create([
                    'section_id' => $section->id,
                ])
            );
        });

        $formData = [
            'status' => true,
        ];

        $page->sections->each(function ($section) use (&$formData) {
            $section->fields->each(function ($field) use (&$formData) {
                $formData[$field->handle] = $this->faker->words(5, true);
            });
        });

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

        // Create a matrix page
        $page = factory(Matrix::class)->create([
            'name'   => 'Test Page',
            'handle' => 'test_page',
            'type'   => 'page',
        ]);

        // Add section to page
        $page->sections()->save(
            factory(Section::class)->create([
                'container_type' => Matrix::class,
                'container_id'   => $page->id,
            ])
        );

        // Add fields to each section
        $page->sections->each(function ($section) {
            $section->fields()->save(
                factory(Field::class)->create([
                    'name'       => 'Test',
                    'handle'     => 'test',
                    'section_id' => $section->id,
                ])
            );
        });

        $this->assertDatabaseHasTable('mx_test_page');
        $this->assertDatabaseTableHasColumn('mx_test_page', 'test');
    }

    /**
     * @test
     */
    public function a_column_is_updated_when_renaming_a_field()
    {
        // Create a matrix page
        $page = factory(Matrix::class)->create([
            'name'   => 'Test Page',
            'handle' => 'test_page',
            'type'   => 'page',
        ]);

        // Add section to page
        $page->sections()->save(
            factory(Section::class)->create([
                'container_type' => Matrix::class,
                'container_id'   => $page->id,
            ])
        );

        // Add fields to each section
        $section = $page->sections->first();

        $section->fields()->save(
            factory(Field::class)->create([
                'name'       => 'Test',
                'handle'     => 'test',
                'section_id' => $section->id,
            ])
        );

        $this->assertDatabaseTableHasColumn('mx_test_page', 'test');

        $section->fields()->first()->update([
            'name'   => 'Lorem',
            'handle' => 'lorem',
        ]);

        $this->assertDatabaseTableHasColumn('mx_test_page', 'lorem');
    }

    /**
     * @test
     */
    public function the_column_is_deleted_when_removing_a_field()
    {
        // Create a matrix page
        $page = factory(Matrix::class)->create([
            'name'   => 'Test Page',
            'handle' => 'test_page',
            'type'   => 'page',
        ]);

        // Add section to page
        $page->sections()->save(
            factory(Section::class)->create([
                'container_type' => Matrix::class,
                'container_id'   => $page->id,
            ])
        );

        // Add fields to each section
        $section = $page->sections->first();

        $section->fields()->save(
            factory(Field::class)->create([
                'name'       => 'Test',
                'handle'     => 'test',
                'section_id' => $section->id,
            ])
        );

        $this->assertDatabaseTableHasColumn('mx_test_page', 'test');

        $section->fields()->first()->delete();

        $this->assertDatabaseTableDoesNotHaveColumn('mx_test_page', 'test');
    }
}
