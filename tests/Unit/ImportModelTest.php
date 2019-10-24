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
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ImportModelTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_import_has_mappings()
    {
    	$import = factory(Import::class)->create();

    	$this->assertDatabaseHas('imports', [
    		'name'   => $import->name,
    		'handle' => $import->handle,
    	]);
    }
}