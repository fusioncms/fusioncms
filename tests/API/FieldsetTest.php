<?php

namespace Tests\API;

use App\Models\Fieldset;
use Facades\FieldsetFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldsetTest extends TestCase
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

        $fieldset = FieldsetFactory::create();

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