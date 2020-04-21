<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;

class MenuNodeTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->actingAs($this->admin, 'api');

        $this->section      = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->fieldExcerpt = \Facades\FieldFactory::withName('Excerpt')->withSection($this->section)->create();
        $this->fieldContent = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($this->section)->create();
        $this->fieldset     = \Facades\FieldsetFactory::withName('General')->withSections(collect([$this->section]))->create();
        $this->menu         = \Facades\MenuFactory::withName('Header')->withFieldset($this->fieldset)->create();
        $this->model        = (new \Fusion\Services\Builders\Menu($this->menu->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_create_a_new_menu_node()
    {
        $attributes = [
            'name' => $this->faker->word,
            'url'  => $this->faker->url,
        ];

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/menus/' . $this->menu->id . '/nodes', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function an_order_is_generated_with_every_node()
    {
        \Illuminate\Database\Eloquent\Model::clearBootedModels();

        $attributes = [
            'name'  => $this->faker->word,
            'url'   => $this->faker->url,
            'order' => null
        ];

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/menus/' . $this->menu->id . '/nodes', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), [
            'name'  => $attributes['name'],
            'url'   => $attributes['url'],
            'order' => 1
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_without_permissions_cannot_create_new_menu_node()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/menus/' . $this->menu->id . '/nodes', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_update_an_existing_menu_nodes()
    {
        list($node, $attributes) = $this->newMenuNode([
            'name' => 'Example',
            'url'  => 'https://example.com',
        ]);

        // Update ----
        $attributes['name'] = 'Updated Name';
        $attributes['url']  = 'https://updated.com';

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/menus/' . $this->menu->id . '/nodes/' . $node->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas($this->model->getTable(), $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group menu
     */
    public function a_user_with_permissions_can_delete_an_existing_menu_node()
    {
        list($node, $attributes) = $this->newMenuNode();

        // Delete ----
        $this
            ->be($this->admin, 'api')
            ->json('DELETE', '/api/menus/' . $this->menu->id . '/nodes/' . $node->id);

        $this->assertDatabaseMissing($this->model->getTable(), [ 'id' => $node->id ]);
    }

    //
    // ------------------------------------------------
    //

    /**
     * Returns new menu node w/ attributes
     * [Helper]
     *
     * @param  array  $overrides
     * @return array
     */
    protected function newMenuNode($overrides = []): array
    {
        $attributes = array_merge([
            'name' => $this->faker->word,
            'url'  => $this->faker->url,
        ], $overrides);

        $node = $this
            ->json('POST', '/api/menus/' . $this->menu->id . '/nodes', $attributes)
            ->getData()
            ->data;

        return [$node, $attributes];
    }
}
