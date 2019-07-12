<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature\API;

use App\Models\Fieldset;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldsetSectionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function a_fieldset_can_have_a_section()
    {
        $this->actingAs($this->admin, 'api');

        $fieldset = factory(Fieldset::class)->create();

        $formData = [
            'sections' => [
                [
                    'name'        => 'Example',
                    'handle'      => 'example',
                    'description' => 'Just an example section.',
                    'placement'   => 'body',
                    'order'       => 0,
                ],
            ],
        ];

        $this->json('POST', '/api/fieldsets/' . $fieldset->id . '/sections', $formData);

        $this->assertDatabaseHas('sections', $formData['sections'][0]);
    }
}
