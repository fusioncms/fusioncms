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

use App\Models\User;
use Tests\Foundation\TestCase;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_authenticated_user_cannot_visit_registration_form()
    {
        $this
            ->actingAs($this->user)
            ->get(route('register'))
            ->assertRedirect('/');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_can_visit_registration_form()
    {
        $this
            ->get(route('register'))
            ->assertViewIs('auth.register');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_can_register()
    {
        Event::fake();

        // Set default user role..
        setting('users.default_user_role', 'user');

        // Generate new user attributes..
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret-password',
            'password_confirmation' => 'secret-password',
        ];

        // Assert - registration works..
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect('/');

        $user = User::where(['email' => $attributes['email']])->first();

        // Assert - user was created and authenticated..
        $this->assertDatabaseHas('users', [
            'name'       => $attributes['name'],
            'email'      => $attributes['email'],
        ]);
        $this->assertTrue($user->hasRole('user'));
        $this->assertAuthenticatedAs($user);

        // Assert - mock event fired..
        Event::assertDispatched(Registered::class, function ($event) use ($user) {
            return $event->user->id === $user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function registration_form_requires_an_valid_email()
    {
        // Generate new user attributes..
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => 'invalid-email',
            'password'              => 'secret-password',
            'password_confirmation' => 'secret-password',
        ];

        // Assert - registration returns error
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect(route('register'))
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('name'));
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function registration_form_requires_matching_password_fields()
    {
        // Generate new user attributes..
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret-password',
            'password_confirmation' => 'invalid-match',
        ];

        // Assert - registration returns error
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect(route('register'))
            ->assertSessionHasErrors('password');

        $this->assertTrue(session()->hasOldInput('name'));
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }
}
