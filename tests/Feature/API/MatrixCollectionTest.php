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

class MatrixCollectionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_create_a_collection()
    {
        $this->actingAs($this->admin, 'api');

        $collection = factory(Matrix::class)->make([
            'name'   => 'Blog',
            'handle' => 'blog',
            'type'   => 'collection',
        ])->toArray();

        $response = $this->json('POST', '/api/matrices', $collection);

        $response->assertStatus(201);

        $this->assertDatabaseHasTable('mx_blog');
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_collection()
    {
        $this->actingAs($this->admin, 'api');

        $collection = factory(Matrix::class)->create([
            'name'   => 'Blog',
            'handle' => 'blog',
            'type'   => 'collection',
        ]);

        $collection->name   = 'Posts';
        $collection->handle = 'posts';

        $response = $this->json('PATCH', '/api/matrices/' . $collection->id, $collection->toArray());

        $this->assertDatabaseHasTable('mx_posts');
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_column_is_created_when_adding_a_field()
    {
        $this->actingAs($this->admin, 'api');

        // Create a matrix page
        $collection = factory(Matrix::class)->create([
            'name'   => 'Blog',
            'handle' => 'blog',
            'type'   => 'collection',
        ]);

        // Add section to collection
        $collection->sections()->save(
            factory(Section::class)->create([
                'container_type' => Matrix::class,
                'container_id'   => $collection->id,
            ])
        );

        // Add fields to each section
        $collection->sections->each(function ($section) {
            $section->fields()->save(
                factory(Field::class)->create([
                    'name'       => 'Story',
                    'handle'     => 'story',
                    'section_id' => $section->id,
                ])
            );
        });

        $this->assertDatabaseHasTable('mx_blog');
        $this->assertDatabaseTableHasColumn('mx_blog', 'story');
    }
}
