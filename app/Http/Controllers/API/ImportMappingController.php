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
use App\Http\Resources\ImportResource;

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
}
