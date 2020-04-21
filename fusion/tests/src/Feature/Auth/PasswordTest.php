<?php

namespace Fusion\Tests\Feature\Auth;

use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;

class PasswordTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	public function setUp(): void
	{
		parent::setUp();
		$this->handleValidationExceptions();

		// --
		$this->attributes = [
			'name'     => $this->faker->unique()->name,
			'email'    => $this->faker->unique()->safeEmail,
			'password' => ($password = '%22CweS3QBZ#d'),
			'password_confirmation' => $password,
		];
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function a_user_with_permission_can_update_a_users_password()
	{
		$oldPassword = $this->user->password;
		$newPassword = $this->attributes['password'];

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, $this->attributes)
			->assertStatus(200);

		$user = $this->user->fresh();

		$this->assertTrue(Hash::check($newPassword, $user->password));
        $this->assertFalse(Hash::check($oldPassword, $user->password));
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function password_fields_are_required_for_new_users()
	{
		unset($this->attributes['password'], $this->attributes['password_confirmation']);

		$this
			->be($this->admin, 'api')
			->json('POST', '/api/users', $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password' => 'The password field is required.'
			]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group user
	 */
	public function password_confirmation_field_is_required_with_password()
	{
		unset($this->attributes['password_confirmation']);

		$this
			->be($this->admin, 'api')
			->json('POST', '/api/users', $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password_confirmation' => 'The password confirmation field is required when password is present.'
			]);

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password_confirmation' => 'The password confirmation field is required when password is present.'
			]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function password_fields_are_not_required_with_update()
	{
		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, [
				'name'  => $this->user->name,
				'email' => $this->user->email,
			])
			->assertStatus(200);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function new_passwords_must_be_at_least_8_characters_long()
	{
		$this->attributes['password'] = ($password = 'short');
		$this->attributes['password_confirmation'] = $password;

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password' => 'The password field must be at least 8 characters long.'
			]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function password_must_contain_at_least_one_lowercase_letter()
	{
		$this->attributes['password'] = ($password = 'ABC123@$#');
		$this->attributes['password_confirmation'] = $password;

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password' => 'The password field must have at least 1 lowercase letter.'
			]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function password_must_contain_at_least_one_uppercase_letter()
	{
		$this->attributes['password'] = ($password = 'abc123@$#');
		$this->attributes['password_confirmation'] = $password;

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password' => 'The password field must have at least 1 uppercase letter.'
			]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function password_must_contain_at_least_one_digit()
	{
		$this->attributes['password'] = ($password = 'ABCabc@$#');
		$this->attributes['password_confirmation'] = $password;

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password' => 'The password field must have at least 1 digit.'
			]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function password_must_contain_at_least_one_symbol()
	{
		$this->attributes['password'] = ($password = 'ABCabc123');
		$this->attributes['password_confirmation'] = $password;

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/users/' . $this->user->id, $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors([
				'password' => 'The password field must have at least 1 symbol.'
			]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function a_user_with_permissions_can_update_a_users_password()
	{
		$oldPassword = $this->user->password;

		$this
			->be($this->admin, 'api')
			->json('POST', "/api/users/{$this->user->id}/password", [
				'password' => ($password = '@M-J"ga&t9f9P5'),
				'password_confirmation' => $password,
			])
			->assertStatus(200);

		$this->assertDatabaseMissing('users', [
			'name'     => $this->user->id,
			'password' => $oldPassword
		]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function a_user_with_permissions_can_update_a_user_password()
	{
		$oldPassword = $this->user->password;

		$this
			->be($this->admin, 'api')
			->json('POST', "/api/users/{$this->user->id}/password", [
				'password' => ($password = '@M-J"ga&t9f9P5'),
				'password_confirmation' => $password,
			])
			->assertStatus(200);

		$this->assertDatabaseMissing('users', [
			'name'     => $this->user->id,
			'password' => $oldPassword
		]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
	public function a_user_without_control_panel_access_cannot_update_a_user_password()
	{
		$this->expectException(AuthenticationException::class);

		$this->json('POST', '/api/users', []);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group auth
	 * @group password
	 */
    public function a_user_without_permissions_cannot_update_a_user_password()
    {
        $this->expectException(AuthorizationException::class);

        $this
        	->be($this->user, 'api')
			->json('POST', "/api/users/{$this->admin->id}/password", []);
    }
}