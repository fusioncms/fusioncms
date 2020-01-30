<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license inmenuation, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature;

use App\Models\Menu;
use App\Models\Fieldset;
use Facades\MenuFactory;
use Facades\FieldFactory;
use Facades\SectionFactory;
use Facades\FieldsetFactory;
use Tests\Foundation\TestCase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MenuTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_menu()
    {
        $this->actingAs($this->admin, 'api');

        $menu = factory(Menu::class)->make()->toArray();

        $response = $this->json('POST', '/api/menus', $menu);

        $response->assertStatus(201);

        $this->assertDatabaseHas('menus', [
            'name'   => $menu['name'],
            'handle' => $menu['handle'],
        ]);
    }

    /** @test */
    public function when_a_menu_is_created_an_associated_fieldset_should_also_be_created()
    {
        $this->actingAs($this->admin, 'api');

        $menu = MenuFactory::withName('Contact Us')->create();

        $this->assertDatabaseHas('fieldsets', [
            'name' => 'Menu: '.$menu->name
        ]);
    }

    /** @test */
    public function a_user_without_permissions_can_not_create_a_menu()
    {
        $this->expectException(AuthenticationException::class);

        $response = $this->json('POST', '/api/menus', [
            'name'   => 'Test',
            'handle' => 'test',
            'slug'   => 'test',
        ]);

        $response->assertStatus(422);

        $this->assertDatabaseMissing('menus', [
            'name'   => 'Test',
            'handle' => 'test',
            'slug'   => 'test',
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_menu()
    {
        $this->actingAs($this->admin, 'api');

        $menu = MenuFactory::create();

        $data                = $menu->toArray();
        $data['description'] = 'This is the new menu description';

        $response = $this->json('PATCH', '/api/menus/'.$menu->id, $data);

        $response->assertStatus(200);

        $this->assertDatabaseHas('menus', [
            'name'        => $data['name'],
            'description' => $data['description']
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_menu()
    {
        $this->actingAs($this->admin, 'api');

        $menu = MenuFactory::create();

        $response = $this->json('DELETE', '/api/menus/'.$menu->id);

        $response->assertStatus(200);

        $this->assertDatabaseMissing('menus', [
            'name' => $menu->name
        ]);
    }
}