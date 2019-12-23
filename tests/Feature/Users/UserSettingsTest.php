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

use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserSettingsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_visitor_can_not_access_account_settings()
    {
        $response = $this->get('/account/settings');

        $response->assertRedirect('login');
    }

    /**
     * @test
     */
    public function a_user_can_access_account_settings()
    {
        $user = $this->actingAsUser();

        $response = $this->get('/account/settings');

        $response->assertStatus(200);
    }

    /**
     * @test
     */
    public function a_user_can_update_their_name()
    {
        $user = $this->actingAsUser();

        $name = 'John Doe';

        $this->post('/account/settings', [
            'name'  => $name,
            'email' => $user->email,
        ]);

        $this->assertDatabaseHas('users', [
            'id'   => $user->id,
            'name' => $name,
        ]);
    }

    /**
     * @test
     */
    public function a_user_can_update_their_email()
    {
        $user  = $this->actingAsUser();
        $email = 'john.doe@example.com';

        $this->post('/account/settings', [
            'name'  => $user->name,
            'email' => $email,
        ]);

        $this->assertDatabaseHas('users', [
            'id'    => $user->id,
            'email' => $email,
        ]);
    }

    /**
     * @test
     */
    public function a_user_can_update_their_password()
    {
        $oldPassword = 'secret123';
        $newPassword = 'super-secure-password';

        $user = factory(\App\Models\User::class)->create([
            'email_token'       => '',
            'verified'          => true,
            'email_verified_at' => now(),
            'password'          => bcrypt($oldPassword),
        ]);

        $this->actingAs($user);

        $response = $this->post('/account/security', [
            'password'              => $newPassword,
            'password_confirmation' => $newPassword,
        ]);

        $this->post('/logout')
            ->assertRedirect('/');

        $this->assertGuest();

        $this->from('/login')
            ->post('/login', [
                'email'    => $user->email,
                'password' => $newPassword,
            ])
            ->assertRedirect('/');
    }
}
