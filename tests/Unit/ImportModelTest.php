<?php


namespace Tests\Unit;

use App\Models\Import;
use Facades\ImportFactory;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ImportModelTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_import_can_exist()
    {
    	$import = ImportFactory::create();

    	$this->assertDatabaseHas('imports', $import->getAttributes());
    }
}