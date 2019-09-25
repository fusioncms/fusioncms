<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature;

use App\Models\Taxonomy;
use App\Models\Fieldset;
use Facades\TaxonomyFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TaxonomyTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group taxonomy
     */
    public function a_user_with_permissions_can_create_a_taxonomy()
    {
        $this->withoutExceptionHandling();
        
        $this->actingAs($this->admin, 'api');

        $taxonomy = factory(Taxonomy::class)->make()->toArray();
        $fieldset = factory(Fieldset::class)->create();

        $taxonomy['fieldset'] = $fieldset->id;

        $response = $this->json('POST', '/api/taxonomies', $taxonomy);

        $response->assertStatus(201);
    }

    /**
     * @test
     * @group fusioncms
     * @group taxonomy
     */
    public function a_user_without_permissions_can_not_create_a_taxonomy()
    {
        $response = $this->json('POST', '/api/taxonomies', [
            'name'   => 'Test',
            'handle' => 'test',
        ]);

        $response->assertStatus(401);
    }

    /**
     * @test
     * @group fusioncms
     * @group taxonomy
     */
    public function a_user_with_permissions_can_update_an_existing_taxonomy()
    {
        $this->actingAs($this->admin, 'api');

        $taxonomy = TaxonomyFactory::create();

        $data                = $taxonomy->toArray();
        $data['description'] = 'This is the new taxonomy description';

        $response = $this->json('PATCH', '/api/taxonomies/'.$taxonomy->id, $data);

        $response->assertStatus(200);
    }
}
