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
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Exports\GoogleExport;
use App\Http\Resources\ImportResource;
use App\Services\Imports\PreviewImport;

class ImportMappingController extends Controller
{
    /**
     * Display a specifie resource.
     * 
     * @param  Import $import
     * @return Resource
     */
    public function show(Import $import)
    {
    	$this->authorize('importer.mapping.show');

        $this->generateMappingPreview($import);

    	return new ImportResource($import);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param  Request $request
     * @param  Import  $import
     * @return Resource
     */
    public function update(Request $request, Import $import)
    {
    	$this->authorize('importer.mapping.update');

    	$attributes = $request->validate([
            'mappings' => 'required|array',
        ]);

        $import->update($attributes);

    	return new ImportResource($import);
    }

    /**
     * Generate mapping preview by saving the first two
     *  row to storage.
     * [Helper]
     * 
     * @param  Import $import
     * @return void
     */
    private function generateMappingPreview(Import $import)
    {
        // Only if source provided..
        //   generate local file for preview
        if ($import->source) {
            $source = (new GoogleExport($import->source));
            $source->setRange('A1:2');
            $source->store("imports/{$import->handle}.csv");
        }

        // Generate preview..
        $preview = (new PreviewImport(1, 2))->toArray("imports/{$import->handle}.csv");
        $preview = $preview[0];  // We'll only acknowledge sheet 1
        
        $import->update(['preview' => $preview]);
    }
}
