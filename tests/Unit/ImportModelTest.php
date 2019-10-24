<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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