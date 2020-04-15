<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Import;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Illuminate\Http\Request;
use Fusion\Jobs\Importer\BeforeImport;
use Fusion\Http\Controllers\Controller;

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
