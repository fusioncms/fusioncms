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

use App\Models\Form;
use App\Models\Fieldset;
use Facades\FormFactory;
use Facades\FieldFactory;
use Facades\SectionFactory;
use Facades\FieldsetFactory;
use Tests\Foundation\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FormTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();

        $this->section  = SectionFactory::times(1)->withoutFields()->create();
        $this->fields[] = FieldFactory::withName('Message')->create();

        foreach ($this->fields as $field) {
            $this->section->fields()->save($field);
        }

        $this->fieldset = FieldsetFactory::withSections(collect([$this->section]))->create();
    }

    /**
     * @test
     * @group fusioncms
     * @group form
     */
    public function a_user_with_permissions_can_create_a_form()
    {
        $this->withoutExceptionHandling();
        
        $this->actingAs($this->admin, 'api');

        $form = factory(Form::class)->make()->toArray();

        $response = $this->json('POST', '/api/forms', $form);

        $response->assertStatus(201);
    }

    /** @test */
    public function when_a_form_is_created_an_associated_fieldset_should_also_be_created_automatically()
    {
        // 
    }

    /**
     * @test
     * @group fusioncms
     * @group form
     */
    public function a_user_without_permissions_can_not_create_a_form()
    {
        $this->expectException(AuthenticationException::class);
        
        $response = $this->json('POST', '/api/forms', [
            'name'   => 'Test',
            'handle' => 'test',
        ]);

        $response->assertStatus(422);
    }

    /**
     * @test
     * @group fusioncms
     * @group form
     */
    public function a_user_with_permissions_can_update_an_existing_form()
    {
        $this->actingAs($this->admin, 'api');

        $form = FormFactory::create();

        $data                = $form->toArray();
        $data['description'] = 'This is the new form description';

        $response = $this->json('PATCH', '/api/forms/'.$form->id, $data);

        $response->assertStatus(200);
    }
}