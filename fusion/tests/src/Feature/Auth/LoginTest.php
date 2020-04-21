<?php

namespace Fusion\Tests\Feature\Users;

use Auth;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
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
    public function a_guest_can_visit_the_login_page()
    {
        $this
            ->get('/login')
            ->assertSuccessful()
            ->assertViewIs('auth.login');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_logged_in_user_cannot_visit_the_login_page()
    {
        $this
            ->actingAs($this->user)
            ->get('/login')
            ->assertRedirect('/home');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_can_login_with_valid_credentials()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'secret',
            ])
            ->assertRedirect('/');

        $this->assertAuthenticatedAs($this->user);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function login_form_requires_a_valid_email()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => 'invalid-email',
                'password' => 'some-password',
            ])
            ->assertRedirect('/login')
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_cannot_login_with_invalid_credentials()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'invalid-password',
            ])
            ->assertRedirect('/login')
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_spammer_cannot_throttle_login()
    {
        for ($i = 0; $i <= 5; $i++) {
            $response = $this
                ->from('/login')
                ->post('/login', [
                    'email'    => 'spammer@example.com',
                    'password' => 'spammer',
                ]);
        }

        $response
            ->assertRedirect('/login')
            ->assertSessionHasErrors('email');

        $this->assertStringContainsString(
            'Too many login attempts.',
            collect($response
                    ->baseResponse
                    ->getSession()
                    ->get('errors')
                    ->getBag('default')
                    ->get('email')
            )->first()
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_logged_in_user_can_opt_to_be_remembered()
    {
        $response = $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'secret',
                'remember' => true,
            ]);

        $user = $this->user->fresh();

        $response
            ->assertRedirect('/')
            ->assertCookie(Auth::guard()->getRecallerName(), vsprintf('%s|%s|%s', [
                $user->id,
                $user->getRememberToken(),
                $user->password,
            ]));

        $this->assertAuthenticatedAs($user);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_logged_in_user_can_logout()
    {
        $this
            ->actingAs($this->user)
            ->post('/logout')
            ->assertRedirect('/');

        $this->assertGuest();
    }
}
