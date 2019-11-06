<?php

namespace Tests\Feature;

use Facades\FieldFactory;
use Facades\MatrixFactory;
use Illuminate\Support\Str;
use Facades\FieldsetFactory;
use Facades\TaxonomyFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldRelationshipTest extends TestCase
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
}