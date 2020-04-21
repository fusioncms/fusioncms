<?php

namespace Fusion\Tests\Feature\Users;

use DB;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ForgetPasswordTest extends TestCase
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
    public function an_unauthenticated_user_can_access_password_reset_page()
    {
        $this
            ->get('/password/reset')
            ->assertViewIs('auth.passwords.email');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_authenticated_user_can_access_password_reset_page()
    {
        $this
            ->get('/password/reset')
            ->assertViewIs('auth.passwords.email');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function forget_password_form_requires_a_valid_email()
    {
        $this
            ->from('/password/reset')
            ->post('/password/email', ['email' => 'invalid-email'])
            ->assertRedirect('/password/reset')
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('email'));
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_invalid_user_cannot_request_email_with_password_reset_link()
    {
        $this
            ->from('/password/reset')
            ->post('/password/email', [
                'email' => 'fake@example.com',
            ])
            ->assertRedirect('/password/reset')
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('email'));
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_valid_user_can_request_email_with_password_reset_link()
    {
        Notification::fake();

        // Assert => Successful password reset request..
        $this
            ->from('/password/reset')
            ->post('/password/email', [
                'email' => $this->user->email,
            ])
            ->assertRedirect('/password/reset')
            ->assertSessionHas('status', 'We have emailed your password reset link!');

        // Assert => User assigned password reset token..
        $this->assertDatabaseHas('password_resets', [
            'email' => $this->user->email,
        ]);

        // Assert => Check for notification assertion..
        Notification::assertSentTo($this->user, ResetPassword::class, function ($notification, $channels) {
            $token = DB::table('password_resets')->first();

            return Hash::check($notification->token, $token->token) === true;
        });
    }
}
