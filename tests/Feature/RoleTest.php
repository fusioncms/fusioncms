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

use App\Models\Role;
use Tests\Foundation\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleTest extends TestCase
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
	 * @group role
	 */
	public function a_user_with_permissions_can_create_a_role()
	{
	$this->actingAs($this->admin, 'api');

	$role = factory(Role::class)->make()->toArray();

	$this
		->json('POST', '/api/roles', $role)
		->assertStatus(201);

		$this->assertDatabaseHas('roles', $role);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group role
	 */
	public function a_guest_cannot_not_create_a_role()
	{
		$this->expectException(AuthenticationException::class);

		$role = factory(Role::class)->make()->toArray();

		$this
			->json('POST', '/api/roles', $role)
			->assertStatus(422);

		$this->assertDatabaseMissing('roles', $role);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group role
	 */
	public function a_user_cannot_create_a_role_without_required_fields()
	{
		$this->actingAs($this->admin, 'api');

		$this
			->json('POST', '/api/roles', [])
			->assertStatus(422)
			->assertJsonValidationErrors(['name', 'slug']);
	}
}