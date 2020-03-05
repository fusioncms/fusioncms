<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Unit;

use App\Models\Section;
use App\Models\Fieldset;
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FieldsetModelTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * @test
     * @group unit
     * @group fieldset
     */
    public function a_fieldset_has_sections()
    {
        $fieldset = factory(Fieldset::class)->create();
        
        factory(Section::class, 3)->create([
            'fieldset_id' => $fieldset->id
        ]);

        $this->assertInstanceOf(HasMany::class, $fieldset->sections());
        $this->assertCount(3, $fieldset->sections);
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

        DB::table('fieldsets')->insert([
            'name'   => ($name = $this->faker->word),
            'handle' => Str::slug($name),
        ]);

        DB::table('fieldsets')->insert([
            'name'   => $name,
            'handle' => Str::slug($name),
        ]);
    }
}
