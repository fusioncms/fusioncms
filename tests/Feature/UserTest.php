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
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;

class UserTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	public function setUp(): void
	{
		parent::setUp();
		$this->handleValidationExceptions();

		// --
		$this->attributes = [
			'name'                  => $this->faker->name,
			'email'                 => $this->faker->unique()->safeEmail,
			'password'              => ($password = $this->faker->password),
			'password_confirmation' => ($password),
			'role'                  => $this->faker->randomElement(['user', 'guest']),
			'status'                => true
		];
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group user
	 */
	public function a_user_with_permissions_can_create_a_user()
	{
		$this->actingAs($this->admin, 'api');

		$this
			->json('POST', '/api/users', $this->attributes)
			->assertStatus(201);

		$this->assertDatabaseHas('users', [
			'name'  => $this->attributes['name'],
			'email' => $this->attributes['email'],
		]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group user
	 */
	public function a_user_without_control_panel_access_cannot_create_new_users()
	{
		$this->expectException(AuthenticationException::class);

		$this->json('POST', '/api/users', []);
	}

	/**
     * @test
     * @group fusioncms
     * @group matrix
     * @group collection
     */
    public function a_user_without_permissions_cannot_create_new_users()
    {
        $this->expectException(AuthorizationException::class);
        
        $this->actingAs($this->user, 'api');

        $this->json('POST', '/api/users', []);
    }

    /**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group user
	 */
	public function a_new_user_record_must_use_a_valid_password()
	{
		$this->actingAs($this->admin, 'api');

		$this->attributes['password'] = 'short';

		$this
			->json('POST', '/api/users', $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors(['password']);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group user
	 */
	public function a_new_user_record_must_confirm_their_password()
	{
		$this->actingAs($this->admin, 'api');

		$this->attributes['password_confirmation'] = 'not-same';

		$this
			->json('POST', '/api/users', $this->attributes)
			->assertStatus(422)
			->assertJsonValidationErrors(['password_confirmation']);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group user
	 */
	public function a_updated_user_record_can_ignore_password_fields()
	{
		$this->actingAs($this->admin, 'api');

		$this->json('POST', '/api/users', $this->attributes);

		$user = User::latest('id')->first();

		// Update ----
		$this
			->json('PATCH', '/api/users/' . $user->id, [
				'name'   => $this->attributes['name'],
				'email'  => $this->attributes['email'],
				'status' => $this->attributes['status']
			])
			->assertStatus(200);
	}

	/**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function each_user_must_have_a_unique_email()
    {
        $this->actingAs($this->admin, 'api');

        $user       = factory(User::class)->create()->toArray();
        $user['id'] = null;

        $this
            ->json('POST', '/api/users', $user)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }
}