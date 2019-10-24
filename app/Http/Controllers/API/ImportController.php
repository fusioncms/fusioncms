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
use App\Support\Imports\PreviewImport;
use Illuminate\Support\Facades\Storage;

class ImportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Resource
     */
    public function index(Request $request)
    {
    	$this->authorize('importer.index');

    	$imports = Import::orderBy('name')->paginate(25);
    	
    	return ImportResource::collection($imports);
    }

    /**
     * Display a specifie resource.
     * 
     * @param  Import $import
     * @return Resource
     */
    public function show(Import $import)
    {
    	$this->authorize('importer.show');

    	return new ImportResource($import);
    }

    /**
     * Store newly created resource in storage.
     * 
     * @param  Request $request
     * @return ImportResource
     */
    public function store(Request $request)
    {
    	$this->authorize('importer.create');

		$attributes = $request->validate([
            'name'     => 'required',
            'handle'   => 'required|unique:imports,handle',
            'location' => 'required|url',
            'module'   => 'required',
            'strategy' => 'required|array',
            'backup'   => 'sometimes|boolean',
        ]);

    	$import = Import::create($attributes);
        $this->saveImportPreview($import);

    	activity()
    		->performedOn($import)
    		->withProperties([
    			'icon' => 'ship',
    			'link' => 'importer/edit/' . $import->id,
    		])
    		->log('Created import (:subject.name)');

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
    	$this->authorize('importer.update');

        // Validate..
    	$attributes = $request->validate([
            'name'     => 'required',
            'handle'   => 'required|unique:imports,id,' . $import->id,
            'location' => 'required|url',
            'module'   => 'required',
            'strategy' => 'required|array',
            'backup'   => 'sometimes|boolean',
        ]);

    	$import->update($attributes);
        $this->saveImportPreview($import);

    	activity()
    		->performedOn($import)
    		->withProperties([
    			'icon' => 'ship',
    			'link' => 'importer/edit/' . $import->id,
    		])
    		->log('Updated import (:subject.name)');

    	return new ImportResource($import);
    }

    /**
     * Destroy specific resource from storage.
     * 
     * @return Import $import
     */
    public function destroy(Import $import)
    {
    	$this->authorize('importer.delete');

    	activity()
    		->performedOn($import)
    		->withProperties([
    			'icon' => 'ship',
    		])
    		->log('Deleted import (:subject.name)');

    	$import->delete();
    }

    /**
     * Save first two rows from import file to storage.
     * [Helper]
     * 
     * @param  Import $import
     * @return void
     */
    private function saveImportPreview(Import $import)
    {
        Storage::put("imports/{$import->handle}.csv", file_get_contents($import->location));
        $preview = (new PreviewImport(1, 2))->toArray("imports/{$import->handle}.csv");
        
        $import->update(['preview' => $preview]);
    }
}
