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
use Illuminate\Http\Request;
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

        try {
            $name   = Str::singular($import->module);
            $queue  = 'imports';
            $file   = "imports/{$import->handle}.csv";
            $module = "App\\Services\\Imports\\{$name}Import";

            (new $module($import))
                ->queue($file, null, \Maatwebsite\Excel\Excel::CSV)
                ->onQueue($queue);
        } catch(Exception $ex) {
            return response()->json($ex->getMessage(), 500);
        }

        return response()->json('Successfully queued!', 200);
    }
}
