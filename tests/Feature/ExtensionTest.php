<?php

namespace Tests\Feature;

use App\Models\Fieldset;
use App\Models\Extension;
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Tests\Mocks\ExtensionBase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExtensionTest extends TestCase
{
	use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        ExtensionBase::setUp();

        $this->handleValidationExceptions();

        // --
        $this->section   = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->field     = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($this->section)->create();
        $this->fieldset  = \Facades\FieldsetFactory::withName('General')->withSections(collect([$this->section]))->create();
        $this->model     = (new ExtensionBase)->create([
            'name'        => ($name = $this->faker->word),
            'handle'      => str_handle($name),
            'description' => $this->faker->sentence,
            'status'      => true,
        ]);

        // Assure extension record exists
        //   => `php artisan module:link`
        $this->extension = Extension::create([
            'name'   => Str::studly($this->model->getTable()),
            'handle' => $this->model->getTable()
        ]);

        $this->extension->attachFieldset($this->fieldset);
    }

    public function tearDown(): void
    {
        ExtensionBase::tearDown();
        parent::tearDown();
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function an_extended_model_can_have_a_fieldset_attached()
    {
        $this->assertInstanceOf(Fieldset::class, $this->model->fieldset);
    	$this->assertCount(1, $this->model->fields);
    }

    /**
     * @test
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
     * @test
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
     * [mock helper]
     * 
     * @param  array  $data
     * @return void
     */
    private function newUpdateRequest($data = [])
    {
        request()->merge($data);

        $this->model->update(request()->all());
    }
}