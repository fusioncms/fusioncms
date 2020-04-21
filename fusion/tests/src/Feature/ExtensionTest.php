<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Fusion\Models\Fieldset;
use Fusion\Models\Extension;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExtensionTest extends TestCase
{
	use RefreshDatabase, WithFaker;

    // public static function setUpBeforeClass(): void
    // {
    //     shell_exec('cp -r ' . dirname(__file__) . '/../Stubs/MockModule ' . dirname(__file__) . '/../../modules/MockModule');
    //     shell_exec('composer dump-autoload');
    // }

    // public static function tearDownAfterClass(): void
    // {
    //     shell_exec('rm -r ' . dirname(__file__) . '/../../modules/MockModule');
    // }

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->extension = Extension::where('handle', 'mock_module_acme')->first();
        $this->fieldset  = $this->generateFieldset();

        $this->extension->attachFieldset($this->fieldset);
    }

    /**
     *
     * @group feature
     * @group extension
     */
    public function model_with_has_extension_trait_will_be_linked_to_extensions_table()
    {
        $this->assertDatabaseHasTable('ext_mock_module_acme');
        $this->assertDatabaseHas('extensions', [
            'name'   => 'MockModuleAcme',
            'handle' => 'mock_module_acme'
        ]);
    }

    /**
     *
     * @group feature
     * @group extension
     */
    public function an_extended_model_can_have_a_fieldset_attached()
    {
        $model = factory('Modules\MockModule\Models\Acme')->create();

        $this->assertInstanceOf(Fieldset::class, $model->fieldset);
    	$this->assertCount(2, $model->fields);
    }

    /**
     *
     * @group feature
     * @group extension
     */
    public function an_extended_model_can_have_a_fieldset_detached()
    {
        $model = factory('Modules\MockModule\Models\Acme')->create();
        $this->extender->detachFieldset();

        $this->assertNull($model->fieldset);
        $this->assertInstanceOf(Collection::class, $model->fields);
    }

    /**
     *
     * @group feature
     * @group extension
     */
    public function creating_extended_model_will_also_update_extending_fields()
    {
        $attributes = factory('Modules\MockModule\Models\Acme')->make()->toArray();

        // extending fields..
        $attributes['content']  = $this->faker->sentence;
        $attributes['profiles'] = collect([ $this->admin->id, $this->user->id ]);

        $this
            ->be($this->admin, 'api')
            ->post('/api/mock-module/acme', $attributes)
            ->assertStatus(201);

        $this->assertDataBaseHas('mock_module_acme', [
            'name'        => $attributes['name'],
            'handle'      => $attributes['handle'],
            'description' => $attributes['description'],
        ]);

        $this->assertDatabaseHasTable('ext_mock_module_acme', [
            'content' => $attributes['content']
        ]);

        $this->assertDatabaseHasTable('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\MockModuleAcme',
            'user_id'    => $this->admin->id
        ]);

        $this->assertDatabaseHasTable('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\MockModuleAcme',
            'user_id'    => $this->user->id
        ]);
    }

    /**
     *
     * @group feature
     * @group extension
     */
    public function updating_extended_model_will_also_update_extending_fields()
    {
        $model      = factory('Modules\MockModule\Models\Acme')->create();
        $attributes = $model->toArray();

        // updates..
        $attributes['name']   = 'New Name';
        $attributes['handle'] = 'new_handle';

        // extending fields..
        $attributes['content']  = 'New Content';
        $attributes['profiles'] = collect([ $this->admin->toArray(), $this->user->toArray() ]);

        $this
            ->be($this->admin, 'api')
            ->patch('/api/mock-module/acme/' . $model->id, $attributes)
            ->assertStatus(200);

        $model = $model->fresh();

        $this->assertDataBaseHas('mock_module_acme', [
            'name'        => $attributes['name'],
            'handle'      => $attributes['handle'],
            'description' => $attributes['description'],
        ]);

        $this->assertDatabaseHasTable('ext_mock_module_acme', [
            'content' => $attributes['content']
        ]);

        $this->assertDatabaseHasTable('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\MockModuleAcme',
            'pivot_id'   => $model->id,
            'user_id'    => $this->admin->id
        ]);

        $this->assertDatabaseHasTable('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\MockModuleAcme',
            'pivot_id'   => $model->id,
            'user_id'    => $this->user->id
        ]);
    }

    /**
     *
     * @group feature
     * @group extension
     */
    public function extending_fields_can_be_accessed_like_any_other_attribute()
    {
        $model      = factory('Modules\MockModule\Models\Acme')->create();
        $attributes = $model->toArray();

        // updates..
        $attributes['name'] = 'New Name';

        // extending fields..
        $attributes['content']  = 'New Content';
        $attributes['profiles'] = collect([[ 'id' => $this->admin->id], [ 'id' => $this->user->id ]]);

        $this
            ->be($this->admin, 'api')
            ->patch('/api/mock-module/acme/' . $model->id, $attributes)
            ->assertStatus(200);

        $model = $model->fresh();

        $this->assertEquals($model->content, $attributes['content']);
        $this->assertEquals($model->profiles->pluck('id'), collect($attributes['profiles'])->pluck('id'));
    }

    /**
     * Spin up new Fieldset.
     * [HELPER]
     * @return \Fusion\Models\Fieldset
     */
    private function generateFieldset()
    {
        $section   = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $field     = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($section)->create();
        $fieldTwo  = \Facades\FieldFactory::withName('Profiles')->withType('user')->withSection($section)->create();
        $fieldset  = \Facades\FieldsetFactory::withName('General')->withSections(collect([$section]))->create();

        return $fieldset;
    }
}