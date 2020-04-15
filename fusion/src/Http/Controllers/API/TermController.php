<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Fusion\Http\Requests\TermRequest;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\TermResource;
use Fusion\Services\Builders\Taxonomy as Builder;

class TermController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  string  $taxonomySlug
     * @param  integer $id
     * @return \Fusion\Http\Resources\TermResource
     */
    public function show($taxonomySlug, $id)
    {
        $taxonomy = Taxonomy::where('slug', $taxonomySlug)->firstOrFail();
        $model    = (new Builder($taxonomy->handle))->make();
        $term     = $model->find($id);

        return new TermResource($term);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Http\Requests\TermRequest $request
     * @param  string $taxonomySlug
     * @return \Fusion\Http\Resources\TermResource
     */
    public function store(TermRequest $request, $taxonomySlug)
    {
        $taxonomy = $request->taxonomy;
        $term     = $request->model->create($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($term, $relationship);
        }

        return new TermResource($term);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\TermRequest  $request
     * @param  string  $taxonomySlug
     * @param  integer $id
     * @return \Fusion\Http\Resources\TermResource
     */
    public function update(TermRequest $request, $taxonomySlug, $id)
    {
        $taxonomy = $request->taxonomy;
        $term     = $request->model->findOrFail($id);
        $term->update($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($term, $relationship);
        }

        return new TermResource($term);
    }

    /**
     * Destroy resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string   $taxonomySlug
     * @param  integer  $id
     * @return void
     */
    public function destroy(Request $request, $taxonomySlug, $id)
    {
        $this->authorize('term.destroy');

        $taxonomy = Taxonomy::where('slug', $taxonomySlug)->firstOrFail();
        $model    = (new Builder($taxonomy->handle))->make();
        $term    = $model->findOrFail($id);

        $term->delete();
    }
}
