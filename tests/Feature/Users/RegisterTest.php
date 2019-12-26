<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature\Users;

use App\Models\User;
use Illuminate\Support\Arr;
use App\Mail\WelcomeNewUser;
use Tests\Foundation\TestCase;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Notification;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Services\Settings\Repository as SettingsRepository;
use Symfony\Component\Routing\Exception\RouteNotFoundException;

// ------------------

class MockSettings extends SettingsRepository {
    public function set($key, $value = null)
    {
        $keys = is_array($key) ? $key : [$key => $value];

        foreach ($keys as $key => $value) {
            Arr::set($this->items, $key, $value);
        }
    }
}

// ------------------

class RegisterTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();

        $this->instance('settings', new MockSettings(setting()->all()));

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

    // /**
    //  * @test
    //  * @group fusioncms
    //  * @group auth
    //  */
    // public function register_route_is_disabled_if_the_setting_is_disabled()
    // {
    //     // TODO: Remove the registration route before Routes loaded
        
    //     $this->expectException(RouteNotFoundException::class);

    //     $this->get(route('register'));
    // }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_newly_registered_user_will_not_receive_a_welcome_email_if_setting_is_disabled()
    {
        Mail::fake();

        // Enable settings for by-passing email verification..
        app('settings')->set('users.user_email_welcome', 'disabled');
        app('settings')->set('users.user_email_verification', 'disabled');

        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret-password',
            'password_confirmation' => 'secret-password',
        ];

        // Assert #1 - registration works..
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect('/');

        $user = User::where(['email' => $attributes['email']])->first();
        
        // Assert #2 - user is authenticated..
        $this->assertAuthenticatedAs($user);

        // Assert #3 - email was sent to user..
        Mail::assertNotSent(WelcomeNewUser::class, function ($mail) use ($user) {
            return $mail->user->id === $user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_newly_registered_user_will_receive_a_welcome_email_if_verification_is_disabled()
    {
        Mail::fake();

        // Enable settings for by-passing email verification..
        app('settings')->set('users.user_email_welcome', 'enabled');
        app('settings')->set('users.user_email_verification', 'disabled');

        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret-password',
            'password_confirmation' => 'secret-password',
        ];

        // Assert #1 - registration works..
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect('/');

        $user = User::where(['email' => $attributes['email']])->first();
        
        // Assert #2 - user is authenticated..
        $this->assertAuthenticatedAs($user);

        // Assert #3 - email was sent to user..
        Mail::assertSent(WelcomeNewUser::class, function ($mail) use ($user) {
            return $mail->user->id === $user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_newly_registered_user_will_receive_verification_email_if_setting_is_enabled()
    {
        Notification::fake();

        app('settings')->set('users.user_email_welcome', 'enabled');
        app('settings')->set('users.user_email_verification', 'enabled');

        // Generate new user attributes..
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret-password',
            'password_confirmation' => 'secret-password',
        ];

        // Assert #1/2 - registration works..
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect('/');

        $user = User::where(['email' => $attributes['email']])->first();

        // Assert #5 - notification set to user to verify email..
        Notification::assertSentTo([ $user ], VerifyEmail::class);
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
