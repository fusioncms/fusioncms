<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Field;
use Facades\FieldFactory;
use Fusion\Tests\TestCase;
use Facades\SectionFactory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group unit
     * @group fields
     */
    public function each_field_must_have_a_unique_section_id_and_handle_combination()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: fields.section_id, fields.handle');

        $section = SectionFactory::times(1)->withoutFields()->create();
        $field   = FieldFactory::withSection($section)->create();

        $attributes       = collect(DB::table('fields')->first())->toArray();
        $attributes['id'] = null;

        DB::table('fields')->insert($attributes);
    }

    /**
     * @test
     * @group unit
     * @group fields
     */
    public function fields_can_have_non_unique_section_id_or_handle_seperately()
    {
        $section = SectionFactory::times(1)->withoutFields()->create();
        $field   = FieldFactory::withSection($section)->create();

        $fieldOne = collect(DB::table('fields')->first())->toArray();
        $fieldOne['id']     = null;
        $fieldOne['handle'] = 'new-handle';

        $fieldTwo = collect(DB::table('fields')->first())->toArray();
        $fieldTwo['id']         = null;
        $fieldTwo['section_id'] = 99;

        DB::table('fields')->insert($fieldOne);
        DB::table('fields')->insert($fieldTwo);

        $this->assertTrue(true);
    }
}