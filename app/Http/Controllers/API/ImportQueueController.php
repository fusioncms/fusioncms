<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use App\Models\Import;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Illuminate\Http\Request;
use App\Jobs\Importer\BeforeImport;
use App\Http\Controllers\Controller;

class ImportQueueController extends Controller
{
    /**
     * Queue up an import from storage.
     * 
     * @param  Request $request
     * @param  Import  $import
     * @return void
     */
    public function store(Request $request, Import $import)
    {
    	$this->authorize('importer.queue.store');

        BeforeImport::dispatch($import)->onQueue('imports');

        return response()->json('Successfully queued!', 201);
    }
}
