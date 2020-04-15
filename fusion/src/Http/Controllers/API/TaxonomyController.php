<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\TaxonomyRequest;
use Fusion\Http\Resources\TaxonomyResource;

class TaxonomyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Support\Collection
     */
    public function index(Request $request)
    {
        $this->authorize('taxonomies.show');

        $taxonomies = Taxonomy::orderBy('name')->paginate(25);

        return TaxonomyResource::collection($taxonomies);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Models\Taxonomy  $taxonomy
     * @return \Fusion\Http\Resources\TaxonomyResource
     */
    public function show(Taxonomy $taxonomy)
    {
        $this->authorize('taxonomies.show');

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Display the specified resource by slug value.
     *
     * @param  string  $taxonomy
     * @return \Fusion\Http\Resources\TaxonomyResource
     */
    public function slug($taxonomy)
    {
        $this->authorize('taxonomies.show');

        $taxonomy = str_handle($taxonomy);

        $taxonomy = Taxonomy::where('handle', $taxonomy)->first();

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Fusion\Http\Requests\TaxonomyRequest  $request
     * @return \Fusion\Http\Resources\TaxonomyResource
     */
    public function store(TaxonomyRequest $request)
    {
        $taxonomy = Taxonomy::create($request->validated());

        if ($request->fieldset) {
            $taxonomy->attachFieldset($request->fieldset);
        }

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\TaxonomyRequest  $request
     * @param  \Fusion\Models\Taxonomy  $taxonomy
     * @return \Fusion\Http\Resources\TaxonomyResource
     */
    public function update(TaxonomyRequest $request, Taxonomy $taxonomy)
    {
        $taxonomy->update($request->validated());

        if ($request->fieldset && (! isset($taxonomy->fieldset) || $taxonomy->fieldset->id !== $request->fieldset)) {
            $taxonomy->attachFieldset($request->fieldset);
        } elseif (! $request->fieldset) {
            $taxonomy->detachFieldset();
        }

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Fusion\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function destroy(Taxonomy $taxonomy)
    {
        $this->authorize('taxonomies.delete');

        $taxonomy->delete();
    }
}
