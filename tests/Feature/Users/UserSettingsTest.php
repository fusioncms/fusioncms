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
     * @group fusioncms
     * @group auth
     */
    public function a_visitor_can_not_access_account_settings()
    {
        $response = $this->get('/account/settings');

        $response->assertRedirect('login');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_user_can_access_account_settings()
    {
        $user = $this->actingAsUser();

        $response = $this->get('/account/settings');

        $response->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
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
     * @group fusioncms
     * @group auth
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
     * @group fusioncms
     * @group auth
     */
    public function a_user_can_update_their_password()
    {
        $this->withoutMiddleware([
            \Illuminate\Auth\Middleware\RequirePassword::class
        ]);

        $oldPassword = 'secret123';
        $newPassword = 'super-secure-password';

        $user = factory(\App\Models\User::class)->create([
            'email_verified_at' => now(),
            'password'          => bcrypt($oldPassword),
        ]);

        $this->actingAs($user);

        $this
            ->from('account/security')
            ->post('account/security', [
                'password'              => $newPassword,
                'password_confirmation' => $newPassword,
            ]);

        $user->refresh();

        $this->assertTrue(\Hash::check($newPassword, $user->password));
        $this->assertFalse(\Hash::check($oldPassword, $user->password));
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_user_will_need_to_confirm_their_password_before_updating_their_password()
    {
        $password = 'secret123';

        $user = factory(\App\Models\User::class)->create([
            'email_verified_at' => now(),
            'password'          => bcrypt($password),
        ]);

        $this->actingAs($user);

        // Assert redirect to confirm password..
        $this
            ->get('account/security')
            ->assertStatus(302)
            ->assertRedirect(route('password.confirm'));

        // Assert redirect after confirming password..
        $this
            ->post(route('password.confirm'), [
                'password' => $password
            ])
            ->assertStatus(302)
            ->assertRedirect('account/security');
    }
}
