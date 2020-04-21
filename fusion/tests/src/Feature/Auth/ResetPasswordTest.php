<?php

namespace Fusion\Tests\Feature\Users;

use Hash;
use Event;
use Password;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ResetPasswordTest extends TestCase
{
    use RefreshDatabase;

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
    public function a_valid_user_can_visit_password_reset_form()
    {
        $validToken = Password::broker()->createToken($this->user);

        $this
            ->get(route('password.reset', $validToken))
            ->assertSuccessful()
            ->assertViewIs('auth.passwords.reset')
            ->assertViewHas('token', $validToken);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_authenticated_user_can_visit_password_reset_form()
    {
        $validToken = Password::broker()->createToken($this->user);

        $this
            ->get(route('password.reset', $validToken))
            ->assertSuccessful()
            ->assertViewIs('auth.passwords.reset')
            ->assertViewHas('token', $validToken);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_valid_user_can_reset_password_with_a_valid_token()
    {
        Event::fake();

        $validToken = Password::broker()->createToken($this->user);

        $this
            ->from('/password/reset')
            ->post('/password/reset', [
                'token'                 => $validToken,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ])
            ->assertRedirect('/');

        $this->assertEquals($this->user->email, $this->user->fresh()->email);
        $this->assertTrue(Hash::check('new-password', $this->user->fresh()->password));
        $this->assertAuthenticatedAs($this->user);

        Event::assertDispatched(PasswordReset::class, function ($event) {
            return $event->user->id === $this->user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_valid_user_cannot_reset_password_with_an_invalid_token()
    {
        $invalidToken = 'invalid-token';

        $this
            ->from(route('password.reset', $invalidToken))
            ->post('/password/reset', [
                'token'                 => $invalidToken,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ])
            ->assertRedirect(route('password.reset', $invalidToken));

        $this->assertEquals($this->user->email, $this->user->fresh()->email);
        $this->assertTrue(Hash::check('secret', $this->user->fresh()->password));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function password_reset_form_requires_a_valid_email()
    {
        $validToken = Password::broker()->createToken($this->user);

        $this
            ->from('/password/reset')
            ->post('/password/reset', [
                'token'                 => $validToken,
                'email'                 => 'invalid-email',
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ])
            ->assertRedirect('/password/reset')
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));

        $this->assertEquals($this->user->email, $this->user->fresh()->email);
        $this->assertTrue(Hash::check('secret', $this->user->fresh()->password));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function password_reset_form_requires_a_valid_password()
    {
        $validToken = Password::broker()->createToken($this->user);

        $this
            ->from('/password/reset')
            ->post('/password/reset', [
                'token'                 => $validToken,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'incorrect-match',
            ])
            ->assertRedirect('/password/reset')
            ->assertSessionHasErrors('password');

        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));

        $this->assertEquals($this->user->email, $this->user->fresh()->email);
        $this->assertTrue(Hash::check('secret', $this->user->fresh()->password));
        $this->assertGuest();
    }
}
