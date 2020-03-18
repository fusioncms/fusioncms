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
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FormTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_form()
    {        
        $this->actingAs($this->admin, 'api');

        $form = factory(Form::class)->make()->toArray();

        $response = $this->json('POST', '/api/forms', $form);

        $response->assertStatus(201);

        $this->assertDatabaseHas('forms', [
            'name'   => $form['name'],
            'handle' => $form['handle'],
            'slug'   => $form['slug'],
        ]);
    }

    /** @test */
    public function when_a_form_is_created_an_associated_fieldset_should_also_be_created()
    {
        $this->actingAs($this->admin, 'api');

        $form = FormFactory::withName('Contact Us')->create();

        $this->assertDatabaseHas('fieldsets', [
            'name' => 'Form: '.$form->name
        ]);
    }

    /** @test */
    public function a_user_without_permissions_can_not_create_a_form()
    {
        $this->expectException(AuthenticationException::class);
        
        $response = $this->json('POST', '/api/forms', [
            'name'   => 'Test',
            'handle' => 'test',
            'slug'   => 'test',
        ]);

        $response->assertStatus(422);

        $this->assertDatabaseMissing('forms', [
            'name'   => 'Test',
            'handle' => 'test',
            'slug'   => 'test',
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_form()
    {
        $this->actingAs($this->admin, 'api');

        $form = FormFactory::create();

        $data                = $form->toArray();
        $data['description'] = 'This is the new form description';

        $response = $this->json('PATCH', '/api/forms/'.$form->id, $data);

        $response->assertStatus(200);

        $this->assertDatabaseHas('forms', [
            'name'        => $data['name'],
            'description' => $data['description']
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_form()
    {
        $this->actingAs($this->admin, 'api');

        $form = FormFactory::create();

        $response = $this->json('DELETE', '/api/forms/'.$form->id);

        $response->assertStatus(200);

        $this->assertDatabaseMissing('forms', [
            'name' => $form->name
        ]);
    }

    /** @test */
    public function a_guest_can_submit_a_form_response()
    {
        $this->actingAs($this->admin, 'api');

        $form = FormFactory::withName('Contact Us')->thatCollectsIPs()->create();

        // This request is not authenticated as the admin, as the admin
        // login was issued through the api guard
        $response = $this->post($form->path());

        $response->assertStatus(302);

        $this->assertDatabaseHas('form_'.$form->handle, [
            'identifiable_ip_address' => '127.0.0.1'
        ]);
    }

    /**
     * @test
     * @group feature
     * @group form
     */
    public function each_form_must_have_a_unique_slug()
    {
        $this->actingAs($this->admin, 'api');

        $form = factory(Form::class)->create()->toArray();
        $form['id']     = null;
        $form['handle'] = 'new_handle';

        $this
            ->json('POST', '/api/forms', $form)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    /**
     * @test
     * @group feature
     * @group form
     */
    public function each_form_must_have_a_unique_handle()
    {
        $this->actingAs($this->admin, 'api');

        $form = factory(Form::class)->create()->toArray();
        $form['id']   = null;
        $form['slug'] = 'new-slug';

        $this
            ->json('POST', '/api/forms', $form)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['handle']);
    }
}