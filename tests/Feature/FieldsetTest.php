<?php

namespace Tests\Feature;

use Facades\FieldFactory;
use Facades\MatrixFactory;
use Facades\FieldsetFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldsetTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function when_attached_all_fields_should_generate_database_columns()
    {
        $fieldset = FieldsetFactory::create();
        $matrix   = MatrixFactory::withFieldset($fieldset)->create();
        $table    = $matrix->getBuilder()->getTable();
        
        $fields = $fieldset->sections->map(function($section) {
            return $section->only('fields');
        })->flatten();

        foreach ($fields as $field) {
            $this->assertDatabaseTableHasColumn($table, $field->handle);
        }
    }

    /** @test */
    public function when_detached_all_fields_should_drop_database_columns()
    {
        $fieldset = FieldsetFactory::create();
        $matrix   = MatrixFactory::withFieldset($fieldset)->create();
        $table    = $matrix->getBuilder()->getTable();
        
        $fields = $fieldset->sections->map(function($section) {
            return $section->only('fields');
        })->flatten();

        foreach ($fields as $field) {
            $this->assertDatabaseTableHasColumn($table, $field->handle);
        }

        $matrix->detachFieldset();

        foreach ($fields as $field) {
            $this->assertDatabaseTableDoesNotHaveColumn($table, $field->handle);
        }
    }

    /** @test */
    public function when_replaced_database_columns_should_merge_if_compatible()
    {
        // 
    }

    /** @test */
    public function when_replaced_database_columns_should_drop_if_irrelevant()
    {
        // 
    }

    /** @test */
    public function when_a_field_is_added_a_database_column_should_be_generated_on_all_attached_tables()
    {
        $fieldset = FieldsetFactory::create();
        $field    = FieldFactory::withName('Example')->create();

        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $newsMatrix  = MatrixFactory::withName('News')->withFieldset($fieldset)->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();
        $newsTable   = $newsMatrix->getBuilder()->getTable();
        
        $fieldset->sections()->first()->attach($field->id);
        $fieldset->save();

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseTableDoesNotHaveColumn($newsTable, $field->handle);
    }

    public function when_a_field_is_removed_the_associated_database_column_should_be_removed_from_all_tables()
    {
        // 
    }

    /** @test */
    public function when_a_field_is_renamed_the_associated_database_column_should_also_be_renamed()
    {
        // 
    }

    /** @test */
    public function when_a_fields_fieldtype_is_changed_the_associated_database_columns_type_should_also_change()
    {
        // 
    }
}