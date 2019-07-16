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

use App\Models\Matrix;
use App\Models\Fieldset;
use Facades\MatrixFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class MatrixModelTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_matrix_can_have_a_fieldset()
    {
        $matrix   = factory(Matrix::class)->create();
        $fieldset = factory(Fieldset::class)->create();

        $matrix->attachFieldset($fieldset);

        $this->assertInstanceOf(Fieldset::class, $matrix->fieldset);
    }

    /** @test */
    public function a_database_table_is_created_with_a_matrix()
    {
        MatrixFactory::withName('Posts')
            ->create();

        $this->assertDatabaseHasTable('mx_posts');
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_collection()
    {
        $collection = MatrixFactory::withName('Blog')
            ->create();

        $this->assertDatabaseHasTable('mx_blog');

        $collection->name   = 'Posts';
        $collection->handle = 'posts';
        $collection->save();

        $this->assertDatabaseHasTable('mx_posts');
    }
}
