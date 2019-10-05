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

use App\Models\Taxonomy;
use App\Models\Fieldset;
use Facades\TaxonomyFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class TaxonomyTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_taxonomy_can_have_a_fieldset()
    {
        $taxonomy = factory(Taxonomy::class)->create();
        $fieldset = factory(Fieldset::class)->create();

        $taxonomy->attachFieldset($fieldset);

        $this->assertInstanceOf(Fieldset::class, $taxonomy->fieldset);
    }

    /** @test */
    public function a_database_table_is_created_with_a_taxonomy()
    {
        TaxonomyFactory::withName('Categories')
            ->create();

        $this->assertDatabaseHasTable('taxonomy_categories');
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_taxonomy()
    {
        $taxonomy = TaxonomyFactory::withName('Categories')
            ->create();

        $this->assertDatabaseHasTable('taxonomy_categories');

        $taxonomy->name   = 'Tags';
        $taxonomy->handle = 'tags';
        $taxonomy->save();

        $this->assertDatabaseHasTable('taxonomy_tags');
    }
}
