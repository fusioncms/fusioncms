<?php

namespace Tests\Unit;

use Fusion\Models\Fieldset;
use Fusion\Models\Extension;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExtensionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * 
     * @group unit
     * @group extension
     */
    public function an_extension_can_have_a_fieldset()
    {
        $extension = factory(Extension::class)->create();
        $fieldset  = factory(Fieldset::class)->create();

        $extension->attachFieldset($fieldset);

        $this->assertInstanceOf(Fieldset::class, $extension->fieldset);
    }

    /**
     * 
     * @group unit
     * @group extension
     */
    public function a_database_table_is_created_with_an_extension()
    {
        $extension = factory(Extension::class)->create();

        $this->assertDatabaseHasTable('ext_' . $extension->handle);
    }
}
