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
}
