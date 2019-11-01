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
    public function when_a_field_with_a_morph_to_many_relationship_is_added_the_proper_tables_and_columns_should_be_generated()
    {
        $fieldset    = FieldsetFactory::create();
        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $taxonomy    = TaxonomyFactory::withName('Categories')->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();

        $section = $fieldset->sections()->first();
        $field   = FieldFactory::withName('Category')
            ->withSection($section)
            ->withType('taxonomy')
            ->withSettings([
                'taxonomy' => $taxonomy->id,
            ])
            ->create();
        
        $fieldset->sections()->first()->fields()->save($field);

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseHasTable(Str::plural(Str::addAbleSuffix($taxonomy->handle)));
    }

    /** @test */
    public function when_a_field_with_a_morph_to_many_relationship_is_renamed_the_proper_tables_and_columns_should_be_updated()
    {
        $fieldset    = FieldsetFactory::create();
        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $taxonomy    = TaxonomyFactory::withName('Categories')->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();

        $section = $fieldset->sections()->first();
        $field   = FieldFactory::withName('Category')
            ->withSection($section)
            ->withType('taxonomy')
            ->withSettings([
                'taxonomy' => $taxonomy->id,
            ])
            ->create();
        
        $fieldset->sections()->first()->fields()->save($field);

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseHasTable(Str::plural(Str::addAbleSuffix($taxonomy->handle)));

        $field->name   = 'Tag';
        $field->handle = 'tag';
        $field->save();

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseHasTable(Str::plural(Str::addAbleSuffix($taxonomy->handle)));
    }

    /** @test */
    public function when_a_field_with_a_morph_to_many_relationship_is_removed_the_associated_table_should_be_removed_as_well()
    {
        $fieldset           = FieldsetFactory::create();
        $postsMatrix        = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $categoriesTaxonomy = TaxonomyFactory::withName('Categories')->create();
        $postsTable        = $postsMatrix->getBuilder()->getTable();

        $section = $fieldset->sections()->first();
        $field   = FieldFactory::withName('Categories')
            ->withSection($section)
            ->withType('taxonomy')
            ->withSettings([
                'taxonomy' => $categoriesTaxonomy->id,
            ])
            ->create();
        
        $fieldset->sections()->first()->fields()->save($field);

        $this->assertDatabaseHasTable(Str::plural(Str::addAbleSuffix($field->handle)));

        $field->delete();

        $this->assertDatabaseDoesNotHaveTable(Str::plural(Str::addAbleSuffix('Categories')));
    }
}