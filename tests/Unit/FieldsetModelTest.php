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
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FieldsetModelTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_fieldset_has_sections()
    {
        $fieldset = factory(Fieldset::class)->create();
        
        factory(Section::class, 3)->create([
            'fieldset_id' => $fieldset->id
        ]);

        $this->assertInstanceOf(HasMany::class, $fieldset->sections());
        $this->assertCount(3, $fieldset->sections);
    }

    /** @test */
    public function when_attached_all_fields_should_generate_database_columns()
    {
        // 
    }

    /** @test */
    public function when_detached_all_fields_should_drop_database_columns()
    {
        // 
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

    }

    public function when_a_field_is_removed_the_associated_database_column_should_be_removed_from_all_tables()
    {
        
    }
}
