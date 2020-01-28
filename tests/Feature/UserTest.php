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

class UserTest extends TestCase
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
	 * @group user
	 */
	public function a_user_with_permissions_can_create_a_user()
	{
		$this->actingAs($this->admin, 'api');

		$user = [
			'name'                  => 'John Doe',
			'email'                 => 'john.doe@example.com',
			'password'              => 'supersecret123',
			'password_confirmation' => 'supersecret123',
			'role'                  => 'user',
			'status'                => true
		];

		$this
			->json('POST', '/api/users', $user)
			->assertStatus(201);

		$this->assertDatabaseHas('users', [
			'name'  => $user['name'],
			'email' => $user['email'],
		]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group user
	 */
	public function a_guest_cannot_not_create_a_user()
	{
		$this->expectException(AuthenticationException::class);

		$user = [
			'name'     => $this->faker->name,
			'email'    => $this->faker->unique()->safeEmail,
			'password' => $password = $this->faker->password,
			'password_confirmation' => $password,
			'role'     => 'user',
			'status'   => 1
		];

		$this
			->json('POST', '/api/users', $user)
			->assertStatus(422);

		$this->assertDatabaseMissing('users', [
			'name'  => $user['name'],
			'email' => $user['email'],
		]);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group user
	 */
	public function a_user_cannot_create_a_user_without_required_fields()
	{
		$this->actingAs($this->admin, 'api');

		$this
			->json('POST', '/api/users', [])
			->assertStatus(422)
			->assertJsonValidationErrors(['name', 'email', 'password', 'password_confirmation', 'status']);
	}
}