<?php

namespace Tests\Feature;

use Illuminate\Support\Str;
use Fusion\Models\Fieldset;
use Fusion\Models\Extension;
use Tests\Foundation\TestCase;
use Tests\Mocks\ExtensionBase;
use Illuminate\Support\Facades\Schema;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExtensionTest extends TestCase
{
	use RefreshDatabase, WithFaker;

    /**
     * Temp Module.
     * 
     * @var \Tests\Mocks\ExtensionBase
     */
    protected $model;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
        $this->setupModule();

        // --
        $section   = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $field     = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($section)->create();
        $fieldTwo  = \Facades\FieldFactory::withName('Profiles')->withType('user')->withSection($section)->create();
        $fieldset  = \Facades\FieldsetFactory::withName('General')->withSections(collect([$section]))->create();
        
        $this->model     = (new ExtensionBase)->create([
            'name'        => ($name = $this->faker->word),
            'handle'      => str_handle($name),
            'description' => $this->faker->sentence,
            'status'      => true,
        ]);

        Extension::where('handle', 'mock_extension')->first()->attachFieldset($fieldset);
    }

    public function tearDown(): void
    {
        $this->tearDownModule();

        parent::tearDown();
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function an_extended_model_can_have_a_fieldset_attached()
    {
        // $section   = \Facades\SectionFactory::times(1)->withoutFields()->create();
        // $fieldOne  = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($section)->create();
        // $fieldTwo  = \Facades\FieldFactory::withName('Profiles')->withType('user')->withSection($section)->create();
        // $fieldset  = \Facades\FieldsetFactory::withName('General')->withSections(collect([$section]))->create();

        // Extension::first()->attachFieldset($fieldset);

        $this->assertInstanceOf(Fieldset::class, $this->model->fieldset);
    	$this->assertCount(2, $this->model->fields);
    }

    /**
     * 
     * @group feature
     * @group extension
     */
    public function an_extended_model_can_have_a_fieldset_detached()
    {
        $this->extension->detachFieldset();

        $this->assertNull($this->model->fieldset);
        $this->assertNull($this->model->fields);
    }

    /**
     * 
     * @group feature
     * @group extension
     */
    public function updating_extended_model_will_also_update_extending_fields()
    {
        $this->newUpdateRequest([
            'name'    => 'New Name',
            'content' => 'New Content'
        ]);

        $this->assertDatabaseHas($this->model->extension->getTable(), ['content' => 'New Content']);
        $this->assertDatabaseHas($this->model->getTable(), ['name' => 'New Name']);
    }

    /**
     * [HELPER] Mock update request.
     * 
     *
     * @param  array  $data
     * @return void
     */
    private function newUpdateRequest($data = [])
    {
        request()->merge($data);

        $this->model->update(request()->all());
    }

    private function setUpModule()
    {
        Schema::create('mock_extension', function ($table) {
            $table->increments('id');
            $table->string('name');
            $table->string('handle')->unique();
            $table->text('description');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        // Build `extension` link..
        Extension::create([
            'name'   => 'MockExtension',
            'handle' => 'mock_extension'
        ]);

        // $this->module = (new ExtensionBase)->create([
        //     'name'        => ($name = $this->faker->word),
        //     'handle'      => str_handle($name),
        //     'description' => $this->faker->sentence,
        //     'status'      => true,
        // ]);
    }

    private function tearDownModule()
    {
        Schema::dropIfExists('mock_extension');
    }
}