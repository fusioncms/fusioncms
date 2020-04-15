<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Import;
use Illuminate\Http\Request;
use Fusion\Rules\ImportStrategy;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ImportResource;
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
     * Display a specific resource.
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
            'source'   => 'required_without:upload|url',
            'module'   => 'required',
            'group'    => 'required|integer',
            'strategy' => ['required', 'array', new ImportStrategy],
            'backup'   => 'required|boolean',
            // 'upload'   => 'required_without:source|string'
        ]);

        // Move tmp file created through <p-upload> to more permanent folder..
        // if ($attributes['upload']) {
        //     Storage::move($attributes['upload'], "imports/{$attributes['handle']}.csv");
        // }

    	$import = Import::create($attributes);

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
            'source'   => 'required_without:upload|url',
            'module'   => 'required',
            'group'    => 'required|integer',
            'strategy' => ['required', 'array', new ImportStrategy],
            'backup'   => 'required|boolean',
            // 'upload'   => 'required_without:source|string'
        ]);

        // Move tmp file created through <p-upload> to more permanent folder..
        // if ($attributes['upload']) {
        //     Storage::move($attributes['upload'], "imports/{$attributes['handle']}.csv");
        // }

    	$import->update($attributes);

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

    	$import->delete();
    }
}
