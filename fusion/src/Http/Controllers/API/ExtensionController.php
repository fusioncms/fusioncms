<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Extension;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ExtensionRequest;
use Fusion\Http\Resources\ExtensionResource;

class ExtensionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Fusion\Http\Resources\ExtensionResource
     */
    public function index(Request $request)
    {
        $this->authorize('extensions.show');

        $extensions = Extension::orderBy('name')->paginate(25);

        return ExtensionResource::collection($extensions);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Models\Extension  $extension
     * @return \Fusion\Http\Resources\ExtensionResource
     */
    public function show(Extension $extension)
    {
        $this->authorize('extensions.show');

        return new ExtensionResource($extension);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Fusion\Http\Requests\ExtensionRequest  $request
     * @return \Fusion\Http\Responses\ExtensionResource
     */
    public function store(ExtensionRequest $request)
    {
        $extension = Extension::create($request->validated());

        if ($request->fieldset) {
            $extension->attachFieldset($request->fieldset);
        }

        return new ExtensionResource($extension);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\ExtensionRequest  $request
     * @param  \Fusion\Models\Extension  $extension
     * @return \Fusion\Http\Responses\ExtensionResource
     */
    public function update(ExtensionRequest $request, Extension $extension)
    {
        $extension->update($request->validated());

        if ($request->fieldset && (! isset($extension->fieldset) || $extension->fieldset->id !== $extension->fieldset)) {
            $extension->attachFieldset($request->fieldset);
        } elseif (! $request->fieldset) {
            $extension->detachFieldset();
        }

        return new ExtensionResource($extension);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Fusion\Models\Extension  $extension
     * @return void
     */
    public function destroy(Extension $extension)
    {
        $this->authorize('extensions.delete');

        $extension->delete();
    }
}
