<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Section;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SectionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group unit
     * @group sections
     */
    public function each_section_must_have_a_unique_fieldset_id_and_handle_combination()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: sections.fieldset_id, sections.handle');

        $section       = factory(Section::class)->create();
        $section       = $section->toArray();
        $section['id'] = null;

        DB::table('sections')->insert($section);
    }

    /**
     * @test
     * @group unit
     * @group sections
     */
    public function sections_can_have_non_unique_fieldset_id_or_handle_seperately()
    {
        $sectionOne           = factory(Section::class)->create();
        $sectionOne           = $sectionOne->toArray();
        $sectionOne['id']     = null;
        $sectionOne['handle'] = 'new-handle';

        $sectionTwo                = factory(Section::class)->create();
        $sectionTwo                = $sectionTwo->toArray();
        $sectionTwo['id']          = null;
        $sectionTwo['fieldset_id'] = 99;

        DB::table('sections')->insert($sectionOne);
        DB::table('sections')->insert($sectionTwo);

        $this->assertTrue(true);
    }
}