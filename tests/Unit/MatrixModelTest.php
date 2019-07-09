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
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class MatrixModelTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_matrix_has_a_fieldset()
    {
        $matrix = factory(Matrix::class)->create();

        $this->assertInstanceOf(MorphToMany::class, $matrix->fieldset());
    }
}
