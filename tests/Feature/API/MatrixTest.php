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

use App\Models\Matrix;
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

        $matrix = factory(Matrix::class)->make()->toArray();

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
}
