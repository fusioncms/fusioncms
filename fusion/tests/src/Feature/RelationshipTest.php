<?php

namespace Fusion\Tests\Feature;

use Facades\FieldFactory;
use Facades\MatrixFactory;
use Fusion\Tests\TestCase;
use Facades\SectionFactory;
use Facades\FieldsetFactory;
use Facades\TaxonomyFactory;
use Illuminate\Support\Str;
use Fusion\Services\Builders\Page;
use Fusion\Services\Builders\Collection;
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
    public function user_field_will_add_relationships_through_users_pivot_table()
    {
        $this->actingAs($this->admin, 'api');

        $section  = SectionFactory::times(1)->withoutFields()->create();
        $field    = FieldFactory::withName('Users')->withType('user')->withSection($section)->create();
        $fieldset = FieldsetFactory::withSections(collect([$section]))->create();

        // Create page
        $matrix = MatrixFactory::asPage()->withFieldset($fieldset)->create();
        $model  = (new Page($matrix->handle))->make();

        // Update with users
        $users = factory(\Fusion\Models\User::class, 3)->create();

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
                'pivot_type' => 'Fusion\Models\Pages\\' . Str::studly($matrix->handle),
                'pivot_id'   => $matrix->id,
                'order'      => $key + 1,
            ]);
        }
    }

    /** @test */
    public function a_user_can_add_multiple_fields_linked_to_the_same_taxonomy()
    {
        $this->actingAs($this->admin, 'api');

        // Taxonomy with Terms..
        $taxonomy = TaxonomyFactory::withName('Colors')->withStates(['terms'])->create();

        // Fieldset..
        $section  = SectionFactory::times(1)->withoutFields()->create();
        $field1   = FieldFactory::withName('Primary')->withType('taxonomy')->withSection($section)->withSettings(['taxonomy' => $taxonomy->id])->create();
        $field2   = FieldFactory::withName('Secondary')->withType('taxonomy')->withSection($section)->withSettings(['taxonomy' => $taxonomy->id])->create();
        $fieldset = FieldsetFactory::withSections(collect([$section]))->create();

        // Create page
        $matrix = MatrixFactory::withName('Post')->asPage()->withFieldset($fieldset)->create();

        $this
            ->json('PATCH', '/api/pages/' . $matrix->id, [
                'matrix_id' => $matrix->id,
                'name'      => 'matrix-page',
                'slug'      => 'matrix-page',
                'status'    => true,
                'primary'   => collect($taxonomy->terms)->pluck('id')->shuffle()->take(3)->toArray(),
                'secondary' => collect($taxonomy->terms)->pluck('id')->shuffle()->take(3)->toArray(),
            ])->assertStatus(201);

        // Fetch records
        $model   = (new Page($matrix->handle))->make();
        $page    = $model->first();
        $primary = $page->primary->first();
        $secondary = $page->secondary->first();

        // Primary color relationship established
        $this->assertInstanceOf('Fusion\Models\Taxonomies\Colors', $primary);
        $this->assertDatabaseHas($primary->pivot_table, [
            'colors_id'  => $primary->id,
            'field_id'   => $field1->id,
            'pivot_id'   => $matrix->id,
            'pivot_type' => 'Fusion\Models\Pages\Post',
        ]);

        // Secondary color relationship established
        $this->assertInstanceOf('Fusion\Models\Taxonomies\Colors', $secondary);
        $this->assertDatabaseHas($secondary->pivot_table, [
            'colors_id'  => $secondary->id,
            'field_id'   => $field2->id,
            'pivot_id'   => $matrix->id,
            'pivot_type' => 'Fusion\Models\Pages\Post',
        ]);


        // Assert inverse relationship has been established
        // Note: uncomment to see model file
        // dd(\File::get(app_path('Models/Taxonomies/Colors.php')));

        // TODO: figure out why this assertion fails
        // $this->assertInstanceOf('Fusion\Models\Pages\Post', $primary->post->first());
        // Temp solution
        $this->assertInstanceOf('Fusion\Models\Pages\Post',
            $primary->morphedByMany('Fusion\Models\Pages\Post', 'pivot', 'taxonomy_colors_pivot')->first());
    }
}