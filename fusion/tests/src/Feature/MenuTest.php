<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Menu;
use Facades\MenuFactory;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Database\Eloquent\Model;
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

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_create_a_menu()
    {
        $menu = factory(Menu::class)->make()->toArray();

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/menus', $menu)
            ->assertStatus(201);

        $this->assertDatabaseHas('menus', [
            'name'   => $menu['name'],
            'handle' => $menu['handle'],
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function when_a_menu_is_created_an_associated_fieldset_should_also_be_created()
    {
        $this->actingAs($this->admin, 'api');

        $menu = MenuFactory::withName('Header')->create();

        $this->assertDatabaseHas('fieldsets', [
            'name' => 'Menu: '.$menu->name
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_without_control_panel_access_cannot_create_a_new_menu()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/menus', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_without_permissions_cannot_create_a_new_menu()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->actingAs($this->user, 'api')
            ->json('POST', '/api/menus', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_update_an_existing_menu()
    {
        $this->actingAs($this->admin, 'api');

        $menu = MenuFactory::create();

        $data                = $menu->toArray();
        $data['description'] = 'This is the new menu description';

        $this
            ->json('PATCH', '/api/menus/'.$menu->id, $data)
            ->assertStatus(200);

        $this->assertDatabaseHas('menus', [
            'name'        => $data['name'],
            'description' => $data['description']
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_delete_an_existing_menu()
    {
        $this->actingAs($this->admin, 'api');

        $menu = MenuFactory::create();

        $this
            ->json('DELETE', '/api/menus/'.$menu->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('menus', [
            'name' => $menu->name
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_move_a_menu_node_before_another()
    {
        $this->actingAs($this->admin, 'api');

        $menu = $menu = MenuFactory::withName('Test')->create();

        $nodeOne = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node One',
                'url'  => 'https://example.com/node-one',
            ])
            ->getData()->data;

        $nodeTwo = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node Two',
                'url'  => 'https://example.com/node-two',
            ])
            ->getData()->data;

        $this->json('POST', '/api/menus/'.$menu->id.'/nodes/move/before', [
            'move'   => $nodeTwo->id,
            'before' => $nodeOne->id,
        ]);

        $this->assertDatabaseHas($menu->table, [
            'name'  => $nodeTwo->name,
            'order' => 0.0,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_move_a_menu_node_after_another()
    {
        $this->actingAs($this->admin, 'api');

        $menu = $menu = MenuFactory::withName('Test')->create();

        $nodeOne = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node One',
                'url'  => 'https://example.com/node-one',
            ])
            ->getData()->data;

        $nodeTwo = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node Two',
                'url'  => 'https://example.com/node-two',
            ])
            ->getData()->data;

        $nodeThree = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node Three',
                'url'  => 'https://example.com/node-three',
            ])
            ->getData()->data;

        $this->json('POST', '/api/menus/'.$menu->id.'/nodes/move/after', [
            'move'  => $nodeOne->id,
            'after' => $nodeTwo->id,
        ]);

        $this->assertDatabaseHas($menu->table, [
            'name'  => $nodeOne->name,
            'order' => 2.5,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function menu_nodes_can_be_refreshed()
    {
        $this->actingAs($this->admin, 'api');

        $menu = $menu = MenuFactory::withName('Test')->create();

        $nodeOne = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node One',
                'url'  => 'https://example.com/node-one',
            ])
            ->getData()->data;

        $nodeTwo = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node Two',
                'url'  => 'https://example.com/node-two',
            ])
            ->getData()->data;

        $nodeThree = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Node Three',
                'url'  => 'https://example.com/node-three',
            ])
            ->getData()->data;

        $this->json('POST', '/api/menus/'.$menu->id.'/nodes/move/after', [
            'move'  => $nodeOne->id,
            'after' => $nodeTwo->id,
        ]);

        $this->json('PATCH', '/api/menus/'.$menu->id.'/nodes/refresh');

        $this->assertDatabaseHas($menu->table, ['name' => $nodeTwo->name, 'order' => 1]);
        $this->assertDatabaseHas($menu->table, ['name' => $nodeOne->name, 'order' => 2]);
        $this->assertDatabaseHas($menu->table, ['name' => $nodeThree->name, 'order' => 3]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function each_menu_must_have_a_unique_handle()
    {
        $this->actingAs($this->admin, 'api');

        $menu       = factory(Menu::class)->create()->toArray();
        $menu['id'] = null;

        $this
            ->json('POST', '/api/menus', $menu)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['handle']);
    }

    /**
     * @test
     * @group feature
     * @group validation
     * @group menu
     */
    public function menu_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('POST', '/api/menus', [ 'handle' => 'default' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);

        $this
            ->json('POST', '/api/menus', [ 'handle' => 'for' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);

        $this
            ->json('POST', '/api/menus', [ 'handle' => 'true' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);
    }
}