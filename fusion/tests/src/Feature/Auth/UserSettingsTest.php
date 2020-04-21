<?php

namespace Fusion\Tests\Feature\Users;

use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserSettingsTest extends TestCase
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
    public function a_visitor_can_not_access_account_settings()
    {
        $this->expectException(AuthenticationException::class);

        $this->get('/account/settings');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_unverified_user_cannot_access_account_settings_if_verficiation_enabled()
    {
        setting(['users.user_email_verification' => 'enabled']);

        $this
            ->be($this->unverifiedUser)
            ->get('/account/settings')
            ->assertStatus(302)
            ->assertRedirect('/email/verify');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_unverified_user_can_access_account_settings_if_verficiation_disabled()
    {
        setting(['users.user_email_verification' => 'disabled']);

        $this
            ->be($this->user)
            ->get('/account/settings')
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_verified_user_can_access_account_settings()
    {
        $this
            ->be($this->admin)
            ->get('/account/settings')
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_user_can_update_their_personal_information()
    {
        $old = $this->admin->toArray();
        $new = [
            'name'  => $this->faker->name,
            'email' => $this->faker->safeEmail,
        ];

        $this
            ->be($this->admin)
            ->post('/account/settings', $new);

        $this->assertDatabaseHas('users', [
            'id'    => $this->admin->id,
            'name'  => $new['name'],
            'email' => $new['email']
        ]);

        $this->assertDatabaseMissing('users', [
            'id'    => $this->admin->id,
            'name'  => $old['name'],
            'email' => $old['email'] ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function name_and_email_fields_are_required_to_update()
    {
        $this->expectException(ValidationException::class);

        $this
            ->be($this->admin)
            ->post('/account/settings', [])
            ->assertStatus(302)
            ->assertJsonValidationErrors([
                'name'  => 'The name field is required.',
                'email' => 'The email field is required.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_user_can_update_their_own_password()
    {
        $this->withoutMiddleware([
            \Illuminate\Auth\Middleware\RequirePassword::class
        ]);

        $oldPassword = $this->admin->password;
        $newPassword = '@M-J"ga&t9f9P5';

        $this
            ->be($this->admin)
            ->from('account/security')
            ->post('account/security', [
                'password'              => $newPassword,
                'password_confirmation' => $newPassword,
            ]);

        $user = $this->admin->fresh();

        $this->assertTrue(Hash::check($newPassword, $user->password));
        $this->assertFalse(Hash::check($oldPassword, $user->password));
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_user_will_need_to_confirm_their_password_before_updating_their_password()
    {
        $this->user->update([
            'email_verified_at' => now(),
            'password'          => bcrypt('secret123'),
        ]);

        // 1) redirect to password confirm screen..
        $this
            ->be($this->user)
            ->get('account/security')
            ->assertStatus(302)
            ->assertRedirect(route('password.confirm'));

        // 2) confirm password to redirect back..
        $this
            ->post(route('password.confirm'), [ 'password' => 'secret123' ])
            ->assertStatus(302)
            ->assertRedirect('account/security');
    }
}
