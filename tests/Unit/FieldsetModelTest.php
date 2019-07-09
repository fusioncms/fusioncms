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

use App\Models\Fieldset;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class FieldsetModelTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_fieldset_has_sections()
    {
        $fieldset = factory(Fieldset::class)->create();

        $this->assertInstanceOf(MorphMany::class, $fieldset->sections());
    }
}
