<?php

namespace App\Http\Controllers\API;

use App\Models\Extension;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ExtensionRequest;
use App\Http\Resources\ExtensionResource;

class ExtensionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \App\Http\Resources\ExtensionResource
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
     * @param  \App\Models\Extension  $extension
     * @return \App\Http\Resources\ExtensionResource
     */
    public function show(Extension $extension)
    {
        $this->authorize('extensions.show');

        return new ExtensionResource($extension);
    }

    /**
     * Display the specified resource by slug value.
     *
     * @param  string  $slug
     * @return \App\Http\Resources\ExtensionResource
     */
    public function slug($slug)
    {
        $this->authorize('matrices.show');

        $extension = Extension::where('slug', $slug)->firstOrFail();

        return new ExtensionResource($extension);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ExtensionRequest  $request
     * @return \App\Http\Responses\ExtensionResource
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
     * @param  \App\Http\Requests\ExtensionRequest  $request
     * @param  \App\Models\Extension  $extension
     * @return \App\Http\Responses\ExtensionResource
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
     * @param  \App\Models\Extension  $extension
     * @return void
     */
    public function destroy(Extension $extension)
    {
        $this->authorize('extensions.delete');

        $extension->delete();
    }
}
