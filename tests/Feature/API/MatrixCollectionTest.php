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
use App\Models\Fieldset;
use Tests\Foundation\TestCase;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MatrixCollectionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_create_a_collection()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        $fieldset   = factory(Fieldset::class)->create();
        $collection = factory(Matrix::class)->make([
            'name'     => 'Blog',
            'handle'   => 'blog',
            'type'     => 'collection',
        ])->toArray();

        $collection['fieldset'] = $fieldset->id;

        try {
            $response = $this->json('POST', '/api/matrices', $collection);
        } catch (ValidationException $e) {
            dd($e->validator->errors());
        }

        $response->assertStatus(201);

        $this->assertDatabaseHasTable('mx_blog');
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_collection()
    {
        // $this->actingAs($this->admin, 'api');

        // 
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_column_is_created_when_adding_a_field()
    {
        // $this->actingAs($this->admin, 'api');
    }
}
