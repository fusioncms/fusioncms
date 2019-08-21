<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\API;

use App\Models\Matrix;
use App\Models\Fieldset;
use Facades\MatrixFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MatrixTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_create_a_matrix()
    {
        $this->actingAs($this->admin, 'api');

        $matrix   = factory(Matrix::class)->make()->toArray();
        $fieldset = factory(Fieldset::class)->create();

        $matrix['fieldset'] = $fieldset->id;

        $response = $this->json('POST', '/api/matrices', $matrix);

        $response->assertStatus(201);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_permissions_can_not_create_a_matrix()
    {
        $response = $this->json('POST', '/api/matrices', [
            'name'   => 'Test',
            'handle' => 'test',
        ]);

        $response->assertStatus(401);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_update_an_existing_matrix()
    {
        $this->actingAs($this->admin, 'api');

        $matrix   = MatrixFactory::create();

        $data = $matrix->toArray();
        $data['description'] = 'This is the new matrix description';

        $response = $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response->assertStatus(200);
    }
}
