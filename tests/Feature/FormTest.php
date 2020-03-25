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
use Tests\Foundation\TestCase;
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

        // --
        // $this->section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        // $this->field    = \Facades\FieldFactory::withName('E-mail')->withSection($this->section)->create();
        // $this->fieldset = \Facades\FieldsetFactory::withName('Form: Contact Us')->withSections(collect([$this->section]))->create();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function a_user_with_permissions_can_create_a_form()
    {        
        $attributes = factory(Form::class)->make()->toArray();

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/forms', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('forms', [
            'name'   => $attributes['name'],
            'handle' => $attributes['handle'],
            'slug'   => $attributes['slug'],
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function a_user_without_control_panel_access_cannot_create_new_forms()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/forms', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function a_user_without_permissions_cannot_create_new_forms()
    {
        $this->expectException(AuthorizationException::class);
        
        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/forms', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function when_a_form_is_created_an_associated_fieldset_should_also_be_created()
    {
        // Note: auth required for dispatcher
        $this->actingAs($this->admin, 'api');
        $form = FormFactory::withName('Contact Us')->create();

        $this->assertDatabaseHas('fieldsets', [
            'name' => 'Form: '.$form->name
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function a_user_with_permissions_can_update_an_existing_form()
    {
        // Note: auth required for dispatcher
        $this->actingAs($this->admin, 'api');
        $form = FormFactory::create();

        // Update ----
        $attributes                = $form->toArray();
        $attributes['description'] = 'This is the new form description';

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/forms/' . $form->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas('forms', [
            'id'          => $form->id,
            'description' => $attributes['description']
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function a_user_with_permissions_can_delete_an_existing_form()
    {
        // Note: auth required for dispatcher
        $this->actingAs($this->admin, 'api');
        $form = FormFactory::create();

        $this
            ->be($this->admin, 'api')
            ->json('DELETE', '/api/forms/' . $form->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('forms', [
            'name' => $form->name
        ]);
    }

    /**
     * @group fusioncms
     * @group feature
     * @group form
     */
    // public function a_form_response_will_be_recorded_in_the_activity_log()
    // {
    //     // guest form request
    //     $this
    //         ->be($this->user)
    //         ->post($form->path(), [
    //             'e-mail' => $this->user->email
    //         ])
    //         ->assertStatus(302);

    //     $response = $form->responses()->latest()->first();

    //     $this->assertDatabaseHas('activity_log', [
    //         'description' => "Submitted response to {$form->name} ({$this->user->email})",
    //         'subject_id'  => $response->id,
    //         'causer_type' => 'App\Models\User',
    //         'causer_id'   => $this->user->id,
    //     ]);
    // }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function a_form_can_be_set_to_collect_ips()
    {
        $this->actingAs($this->admin, 'api');
        $form = FormFactory::withName('Contact Us')->thatCollectsIPs()->create();

        // guest form request
        $this
            ->be($this->guest)
            ->post($form->path())
            ->assertStatus(302);

        $this->assertDatabaseHas($form->table, [
            'form_id' => $form->id,
            'identifiable_ip_address' => '127.0.0.1'
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group form
     */
    public function a_forms_ability_to_collect_ips_is_disabled_on_default()
    {
        $this->actingAs($this->admin, 'api');
        $form = FormFactory::withName('Contact Us')->create();

        // guest form request
        $this
            ->be($this->guest)
            ->post($form->path())
            ->assertStatus(302);

        $this->assertDatabaseMissing($form->table, [
            'form_id' => $form->id,
            'identifiable_ip_address' => '127.0.0.1'
        ]);
    }

    /**
     * @test
     * @group fusioncms
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
     * @group fusioncms
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