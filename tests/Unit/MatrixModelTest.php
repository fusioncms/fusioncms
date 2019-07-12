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
}
