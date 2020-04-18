<?php

namespace Fusion\Tests\Unit;

use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class FieldsetTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->fieldFoo = \Facades\FieldFactory::withName('Foo')->withType('asset')->withSection($this->section)->create();
        $this->fieldBar = \Facades\FieldFactory::withName('Bar')->withType('textarea')->withSection($this->section)->create();
        $this->fieldBaz = \Facades\FieldFactory::withName('Baz')->withType('divider')->withSection($this->section)->create();
        $this->fieldset = \Facades\FieldsetFactory::withSections(collect([$this->section]))->create();
    }

    /**
     * @test
     * @group unit
     * @group fieldset
     */
    public function a_fieldset_has_sections()
    {
        $this->assertTrue($this->fieldset->hasSections());
        $this->assertInstanceOf(HasMany::class, $this->fieldset->sections());
        $this->assertCount(1, $this->fieldset->sections);
    }

    /**
     * @test
     * @group unit
     * @group fieldset
     */
    public function a_fieldset_can_have_many_fields_through_a_section()
    {
        $this->assertTrue($this->fieldset->hasFields());
        $this->assertInstanceOf(HasManyThrough::class, $this->fieldset->fields());
        $this->assertCount(3, $this->fieldset->fields);
    }

    /**
     * @test
     * @group unit
     * @group fieldset
     */
    public function a_fieldset_can_return_fields_that_generate_database_columns()
    {
        $this->assertInstanceOf('Fusion\Models\Field', $this->fieldset->database()->first());
        $this->assertCount(1, $this->fieldset->database());
    }

    /**
     * @test
     * @group unit
     * @group fieldset
     */
    public function a_fieldset_can_return_fields_that_generate_relationships()
    {
        $this->assertInstanceOf('Fusion\Models\Field', $this->fieldset->relationships()->first());
        $this->assertCount(1, $this->fieldset->relationships());
    }

    /**
     * @test
     * @group unit
     * @group fieldset
     */
    public function each_fieldset_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: fieldsets.handle');

        \DB::table('fieldsets')->insert(['name' => 'Foo', 'handle' => 'foo']);
        \DB::table('fieldsets')->insert(['name' => 'Foo', 'handle' => 'foo']);
    }
}
