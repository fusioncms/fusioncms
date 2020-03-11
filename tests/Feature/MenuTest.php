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
use Facades\MenuFactory;
use Tests\Foundation\TestCase;
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

        $menu = MenuFactory::withName('Header')->create();

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

    /** @test */
    public function a_user_with_permissions_can_create_a_new_menu_node()
    {
        $this->actingAs($this->admin, 'api');

        $menu = $menu = MenuFactory::withName('Header')->create();

        $node = [
            'name' => 'Example',
            'url'  => 'https://example.com',
        ];

        $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', $node)
            ->assertStatus(201);

        $this->assertDatabaseHas($menu->table, $node);
    }

    /** @test */
    public function an_order_is_generated_with_every_node()
    {
        Model::clearBootedModels();

        $this->actingAs($this->admin, 'api');

        $menu = $menu = MenuFactory::withName('Header')->create();

        $node = [
            'name' => 'Example',
            'url'  => 'https://example.com',
            'order' => null,
        ];

        $node = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', $node)
            ->getData()->data;

        $this->assertDatabaseHas($menu->table, ['name' => 'Example', 'order' => 1]);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_node()
    {
        $this->actingAs($this->admin, 'api');

        $menu = $menu = MenuFactory::withName('Header')->create();

        $node = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Example',
                'url'  => 'https://example.com',
            ])
            ->getData()->data;

        $this
            ->json('PATCH', '/api/menus/'.$menu->id.'/nodes/'. $node->id, [
                'name'   => 'New Node Name',
            ])
            ->assertStatus(200);

        $this->assertDatabaseHas($menu->table, [ 'name' => 'New Node Name' ]);
        $this->assertDatabaseMissing($menu->table, [ 'name' => 'Example' ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_node()
    {
        $this->actingAs($this->admin, 'api');

        $menu = $menu = MenuFactory::withName('Header')->create();

        $node = $this
            ->json('POST', '/api/menus/'.$menu->id.'/nodes', [
                'name' => 'Example',
                'url'  => 'https://example.com',
            ])
            ->getData()->data;

        $this
            ->json('DELETE', '/api/menus/'.$menu->id.'/nodes/' . $node->id);

        $this->assertDatabaseMissing($menu->table, [ 'id' => $node->id ]);
    }

    /** @test */
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

    /** @test */
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

    /** @test */
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
}