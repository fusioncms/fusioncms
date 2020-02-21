<?php

namespace Tests\Feature;

use Facades\FieldFactory;
use Facades\MatrixFactory;
use Facades\SectionFactory;
use Facades\FieldsetFactory;
use Facades\TaxonomyFactory;
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use App\Services\Builders\Page;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RelationshipTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function when_a_matrix_with_a_morph_to_many_relationship_is_created_the_proper_pivot_table_should_be_generated()
    {
        $taxonomy = TaxonomyFactory::withName('Categories')->create();

        $this->assertDatabaseHasTable($taxonomy->pivot_table);
    }

    /** @test */
    public function when_a_matrix_with_a_morph_to_many_relationship_is_renamed_the_proper_pivot_table_should_be_updated()
    {
        $taxonomy           = TaxonomyFactory::withName('Categories')->create();
        $originalPivotTable = $taxonomy->pivot_table;

        $this->assertDatabaseHasTable($originalPivotTable);

        $taxonomy->name   = 'Tags';
        $taxonomy->handle = 'tags';
        $taxonomy->save();

        $this->assertDatabaseDoesNotHaveTable($originalPivotTable);
        $this->assertDatabaseHasTable($taxonomy->pivot_table);
    }

    /** @test */
    public function when_a_matrix_with_a_morph_to_many_relationship_is_removed_the_associated_pivot_table_should_be_removed_as_well()
    {
        $taxonomy   = TaxonomyFactory::withName('Categories')->create();
        $pivotTable = $taxonomy->pivot_table;

        $this->assertDatabaseHasTable($pivotTable);

        $taxonomy->delete();

        $this->assertDatabaseDoesNotHaveTable($pivotTable);
    }

    /** @test */
    public function user_field_will_all_relationships_through_users_pivot_table()
    {
        $this->actingAs($this->admin, 'api');

        $section  = SectionFactory::times(1)->withoutFields()->create();
        $field    = FieldFactory::withName('Users')->withType('user')->withSection($section)->create();
        $fieldset = FieldsetFactory::withSections(collect([$section]))->create();

        // Create page
        $matrix = MatrixFactory::asPage()->withFieldset($fieldset)->create();
        $model  = (new Page($matrix->handle))->make();

        // Update with users
        $users = factory(\App\Models\User::class, 3)->create();

        $this
            ->json('PATCH', '/api/pages/' . $matrix->id, [
                'matrix_id' => $matrix->id,
                'name'      => 'matrix-page',
                'slug'      => 'matrix-page',
                'status'    => true,
                'users'     => $users,
            ])->assertStatus(201);

        foreach ($users as $key => $user) {
            $this->assertDatabaseHas('users_pivot', [
                'user_id'    => $user->id,
                'field_id'   => $field->id,
                'pivot_type' => 'App\Models\Pages\\' . Str::studly($matrix->handle),
                'pivot_id'   => $matrix->id,
                'order'      => $key + 1,
            ]);
        }
    }
}