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

use App\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\TermRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\TermResource;
use App\Services\Builders\Taxonomy as Builder;

class TermController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  string  $taxonomySlug
     * @param  integer $id
     * @return \App\Http\Resources\TermResource
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
     * @param  \App\Http\Requests\TermRequest $request
     * @param  string $taxonomySlug
     * @return \App\Http\Resources\TermResource
     */
    public function store(TermRequest $request, $taxonomySlug)
    {
        $taxonomy = $request->taxonomy;
        $term     = $request->model->create($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($term, $relationship);
        }

        activity()
            ->performedOn($term)
            ->withProperties([
                'icon' => $taxonomy->icon,
                'link' => 'taxonomies/'.$taxonomy->handle.'/'.$term->id.'/edit',
            ])
            ->log('Created '.Str::singular($taxonomy->name).' (:subject.name)');

        return new TermResource($term);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\TermRequest  $request
     * @param  string  $taxonomySlug
     * @param  integer $id
     * @return \App\Http\Resources\TermResource
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

        activity()
            ->performedOn($term)
            ->withProperties([
                'icon' => $taxonomy->icon,
                'link' => 'taxonomies/'.$taxonomy->handle.'/'.$term->id.'/edit',
            ])
            ->log('Updated '.Str::singular($taxonomy->name).' (:subject.name)');

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

        activity()
            ->performedOn($term)
            ->withProperties([
                'icon' => $taxonomy->icon,
            ])
            ->log('Deleted '.Str::singular($taxonomy->name).' (:subject.name)');

        $term->delete();
    }
}
