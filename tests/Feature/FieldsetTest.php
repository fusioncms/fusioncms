<?php

namespace Tests\Feature;

use App\Models\Fieldset;
use Facades\FieldFactory;
use Facades\MatrixFactory;
use Facades\SectionFactory;
use Illuminate\Support\Str;
use Facades\FieldsetFactory;
use Facades\TaxonomyFactory;
use Tests\Foundation\TestCase;
use App\Services\Builders\Page;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldsetTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function a_fieldset_can_have_a_section()
    {
        $this->actingAs($this->admin, 'api');

        $fieldset = FieldsetFactory::create();

        $fieldset = factory(Fieldset::class)->create();

        $formData = [
            'sections' => [
                [
                    'name'        => 'Example',
                    'handle'      => 'example',
                    'description' => 'Just an example section.',
                    'placement'   => 'body',
                    'order'       => 0,
                ],
            ],
        ];

        $this->json('POST', '/api/fieldsets/' . $fieldset->id . '/sections', $formData);

        $this->assertDatabaseHas('sections', $formData['sections'][0]);
    }

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
        $redSection  = SectionFactory::times(1)->withoutFields()->create();
        $redFieldOne = FieldFactory::withName('Lorem')->withSection($redSection)->create();
        $redFieldTwo = FieldFactory::withName('Ipsum')->withSection($redSection)->create();
        $redFieldset = FieldsetFactory::withSections(collect([$redSection]))->create();

        $matrix = MatrixFactory::asPage()->withFieldset($redFieldset)->create();
        $page   = new Page($matrix->handle);
        $table  = $matrix->getBuilder()->getTable();

        $page->update([
            'lorem'  => 'test',
            'ipsum'  => 'test',
            'status' => true,
        ]);

        $this->assertDatabaseHas($table, [
            'lorem' => 'test',
            'ipsum' => 'test',
        ]);

        $blueSection    = SectionFactory::times(1)->withoutFields()->create();
        $blueFieldOne   = FieldFactory::withName('Lorem')->withSection($blueSection)->create();
        $blueFieldTwo   = FieldFactory::withName('Ipsum')->withSection($blueSection)->create();
        $blueFieldThree = FieldFactory::withName('Dolor')->withSection($blueSection)->create();
        $blueFieldset   = FieldsetFactory::withSections(collect([$blueSection]))->create();

        $matrix->attachFieldset($blueFieldset);

        $this->assertDatabaseHas($table, [
            'lorem' => 'test',
            'ipsum' => 'test',
            'dolor' => null,
        ]);
    }

    /** @test */
    public function when_replaced_database_columns_should_drop_if_irrelevant()
    {
        $redSection  = SectionFactory::times(1)->withoutFields()->create();
        $redFieldOne = FieldFactory::withName('Lorem')->withSection($redSection)->create();
        $redFieldTwo = FieldFactory::withName('Ipsum')->withSection($redSection)->create();
        $redFieldset = FieldsetFactory::withSections(collect([$redSection]))->create();

        $matrix = MatrixFactory::asPage()->withFieldset($redFieldset)->create();
        $page   = new Page($matrix->handle);
        $table  = $matrix->getBuilder()->getTable();

        $page->update([
            'lorem'  => 'test',
            'ipsum'  => 'test',
            'status' => true,
        ]);

        $this->assertDatabaseHas($table, [
            'lorem' => 'test',
            'ipsum' => 'test',
        ]);

        $blueSection    = SectionFactory::times(1)->withoutFields()->create();
        $blueFieldOne   = FieldFactory::withName('Lorem')->withSection($blueSection)->create();
        $blueFieldTwo   = FieldFactory::withName('Dolor')->withSection($blueSection)->create();
        $blueFieldThree = FieldFactory::withName('Sit')->withSection($blueSection)->create();
        $blueFieldset   = FieldsetFactory::withSections(collect([$blueSection]))->create();

        $matrix->attachFieldset($blueFieldset);

        $this->assertDatabaseTableDoesNotHaveColumn($table, 'ipsum');
        $this->assertDatabaseTableHasColumn($table, 'dolor');
        $this->assertDatabaseTableHasColumn($table, 'sit');

        $this->assertDatabaseHas($table, [
            'lorem' => 'test',
            'dolor' => null,
            'sit'   => null,
        ]);
    }

    /** @test */
    public function when_a_field_is_added_a_database_column_should_be_generated_on_all_attached_tables()
    {
        $fieldset    = FieldsetFactory::create();
        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $newsMatrix  = MatrixFactory::withName('News')->withFieldset($fieldset)->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();
        $newsTable   = $newsMatrix->getBuilder()->getTable();

        $section  = $fieldset->sections()->first();
        $field    = FieldFactory::withName('Example')->withSection($section)->create();
        
        $fieldset->sections()->first()->fields()->save($field);

        $this->assertDatabaseTableHasColumn($postsTable, $field->handle);
        $this->assertDatabaseTableHasColumn($newsTable, $field->handle);
    }

    /** @test */
    public function when_a_field_with_a_morph_to_many_relationship_is_added_the_proper_tables_and_columns_should_be_generated()
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

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseHasTable(Str::plural(Str::addAbleSuffix($field->handle)));
    }

    /** @test */
    public function when_a_field_with_a_morph_to_many_relationship_is_renamed_the_proper_tables_and_columns_should_be_updated()
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

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseHasTable(Str::plural(Str::addAbleSuffix($field->handle)));

        $field->name   = 'Tags';
        $field->handle = 'tags';
        $field->save();

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseHasTable(Str::plural(Str::addAbleSuffix($field->handle)));
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

    /** @test */
    public function when_a_field_is_removed_the_associated_database_column_should_be_removed_from_all_tables()
    {
        $fieldset = FieldsetFactory::create();
        $section  = $fieldset->sections()->first();
        $field    = FieldFactory::withName('Example')->withSection($section)->create();

        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $newsMatrix  = MatrixFactory::withName('News')->withFieldset($fieldset)->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();
        $newsTable   = $newsMatrix->getBuilder()->getTable();
        
        $fieldset->sections()->first()->fields()->save($field);
        $fieldset->sections()->first()->fields()->find($field->id)->delete();

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseTableDoesNotHaveColumn($newsTable, $field->handle);
    }

    /** @test */
    public function when_a_field_is_renamed_the_associated_database_column_should_also_be_renamed()
    {
        $fieldset    = FieldsetFactory::create();
        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $newsMatrix  = MatrixFactory::withName('News')->withFieldset($fieldset)->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();
        $newsTable   = $newsMatrix->getBuilder()->getTable();

        $section  = $fieldset->sections()->first();
        $field    = FieldFactory::withName('Example')->withSection($section)->create();
        
        $section->fields()->save($field);

        $this->assertDatabaseTableHasColumn($postsTable, $field->handle);
        $this->assertDatabaseTableHasColumn($newsTable, $field->handle);

        $fieldInstance         = $fieldset->sections()->first()->fields()->first();
        $fieldInstance->name   = 'Renamed';
        $fieldInstance->handle = 'renamed';

        $fieldInstance->save();

        $this->assertDatabaseTableHasColumn($postsTable, $fieldInstance->handle);
        $this->assertDatabaseTableHasColumn($newsTable, $fieldInstance->handle);
    }

    /** @test */
    public function when_a_fields_fieldtype_is_changed_the_associated_database_columns_type_should_also_change()
    {
        $fieldset = FieldsetFactory::create();
        $section  = $fieldset->sections()->first();
        $field    = FieldFactory::withSection($section)->create();

        $section->fields()->save($field);

        $matrix = MatrixFactory::withFieldset($fieldset)->create();
        $table  = $matrix->getBuilder()->getTable();

        $this->assertDatabaseTableColumnHasType($table, $field->handle, 'string');

        $field->type = 'textarea';
        $field->save();

        $this->assertDatabaseTableColumnHasType($table, $field->handle, 'text');
    }
}