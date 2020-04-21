<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Role;
use Fusion\Tests\TestCase;
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
	 * @group feature
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
	 * @group feature
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
	 * @group feature
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

	/**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     */
    public function each_role_must_have_a_unique_name()
    {
        $this->actingAs($this->admin, 'api');

        $role = factory(Role::class)->create()->toArray();
        $role['id']   = null;
        $role['slug'] = 'new-slug';

        $this
            ->json('POST', '/api/roles', $role)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name']);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     */
    public function each_role_must_have_a_unique_slug()
    {
        $this->actingAs($this->admin, 'api');

        $role = factory(Role::class)->create()->toArray();
        $role['id']   = null;
        $role['name'] = 'New Name';

        $this
            ->json('POST', '/api/roles', $role)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }
}