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

use URL;
use Auth;
use Tests\Foundation\TestCase;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EmailVerificationTest extends TestCase
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
    public function a_guest_cannot_see_the_verification_notice()
    {
        $this->withExceptionHandling();

        $this
            ->get(route('verification.notice'))
            ->assertRedirect('/login');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_unverified_user_will_see_verification_notice()
    {
        $this
            ->actingAs($this->user)
            ->get(route('verification.notice'))
            ->assertStatus(200)
            ->assertViewIs('auth.verify');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_verified_user_will_not_see_verification_notice()
    {
        // Manually verify user..
        $this->user->email_verified_at = now();

        $this
            ->actingAs($this->user)
            ->get(route('verification.notice'))
            ->assertRedirect('/');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_cannot_visit_verification_verify_route()
    {
        $this->withExceptionHandling();

        // Manually create email verify route for user..
        // Creating for default user..
        $verifyRoute = URL::signedRoute('verification.verify', ['id' => $this->user->id, 'hash' => sha1($this->user->email)]);

        $this
            ->get($verifyRoute)
            ->assertRedirect('/login');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_user_cannot_verify_another_user()
    {
        $this->withExceptionHandling();

        // Manually create email verify route for user..
        // Creating for default user..
        $verifyRoute = URL::signedRoute('verification.verify', ['id' => $this->user->id, 'hash' => sha1($this->user->email)]);

        $response = $this->actingAs($this->admin)
            ->get($verifyRoute)
            ->assertStatus(403);

        $this->assertFalse($this->user->fresh()->hasVerifiedEmail());
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_verification_is_forbidden_for_invalid_signature()
    {
        $this->withExceptionHandling();

        // Manually verify user..
        $this->user->email_verified_at = now();

        // Manually create invalid verification signature..
        // Creating for default user..
        $invalidSignature = URL::signedRoute('verification.verify', ['id' => $this->user->id, 'hash' => sha1($this->user->email), 'signature' => 'invalid']);

        $response = $this
            ->actingAs($this->user)
            ->get($invalidSignature)
            ->assertStatus(403);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_user_can_verify_themselves()
    {
        // $this->withExceptionHandling();

        // Manually create email verify route for user..
        // Creating for default user..
        $verifyRoute = URL::signedRoute('verification.verify', ['id' => $this->user->id, 'hash' => sha1($this->user->email)]);

        $this
            ->actingAs($this->user)
            ->get($verifyRoute)
            ->assertRedirect('/');

        $this
            ->assertNotNull($this->user->fresh()->email_verified_at);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_cannot_resend_verification_email()
    {
        $this->withExceptionHandling();

        $this
            ->post(route('verification.resend'))
            ->assertRedirect('/login');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_already_verified_user_will_be_redirected()
    {
        $this->withExceptionHandling();

        // Manually verify user..
        $this->user->email_verified_at = now();

        $this
            ->actingAs($this->user)
            ->post(route('verification.resend'))
            ->assertRedirect('/');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_unverified_user_can_resend_verification_email()
    {
        Notification::fake();

        $response = $this
            ->actingAs($this->user)
            ->from(route('verification.notice'))
            ->post(route('verification.resend'))
            ->assertRedirect(route('verification.notice'));

        Notification::assertSentTo($this->user, VerifyEmail::class);
    }
}
