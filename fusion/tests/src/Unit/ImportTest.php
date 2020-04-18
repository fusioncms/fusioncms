<?php

namespace Tests\Unit;

use Fusion\Models\Import;
use Facades\ImportFactory;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ImportTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_import_can_exist()
    {
    	$import = ImportFactory::create();

    	$this->assertDatabaseHas('imports', $import->getAttributes());
    }
}