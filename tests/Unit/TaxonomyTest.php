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
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class TaxonomyTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group unit
     * @group taxonomy
     */
    public function a_taxonomy_can_have_a_fieldset()
    {
        $taxonomy = factory(Taxonomy::class)->create();
        $fieldset = factory(Fieldset::class)->create();

        $taxonomy->attachFieldset($fieldset);

        $this->assertInstanceOf(Fieldset::class, $taxonomy->fieldset);
    }

    /**
     * @test
     * @group unit
     * @group taxonomy
     */
    public function a_database_table_is_created_with_a_taxonomy()
    {
        TaxonomyFactory::withName('Categories')
            ->create();

        $this->assertDatabaseHasTable('taxonomy_categories');
    }

    /**
     * @test
     * @group unit
     * @group taxonomy
     */
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

    /**
     * @test
     * @group unit
     * @group taxonomy
     */
    public function each_taxonomy_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: taxonomies.handle');

        $taxonomy = factory(Taxonomy::class)->create();
        $taxonomy = $taxonomy->toArray();
        $taxonomy['id']   = null;
        $taxonomy['slug'] = 'new-slug';

        DB::table('taxonomies')->insert($taxonomy);
    }

    /**
     * @test
     * @group unit
     * @group taxonomy
     */
    public function each_taxonomy_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: taxonomies.slug');

        $taxonomy = factory(Taxonomy::class)->create();
        $taxonomy = $taxonomy->toArray();
        $taxonomy['id']     = null;
        $taxonomy['handle'] = 'new-handle';

        DB::table('taxonomies')->insert($taxonomy);
    }
}
