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
use App\Http\Controllers\Controller;
use App\Http\Requests\TaxonomyRequest;
use App\Http\Resources\TaxonomyResource;

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
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return \App\Http\Resources\TaxonomyResource
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
     * @return \App\Http\Resources\TaxonomyResource
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
     * @param  \App\Http\Requests\TaxonomyRequest  $request
     * @return \App\Http\Resources\TaxonomyResource
     */
    public function store(TaxonomyRequest $request)
    {
        $taxonomy = Taxonomy::create($request->validated());

        if ($request->fieldset) {
            $taxonomy->attachFieldset($request->fieldset);
        }

        activity()
            ->performedOn($taxonomy)
            ->withProperties([
                'icon' => 'sitemap',
                'link' => 'taxonomies/'.$taxonomy->id.'/edit',
            ])
            ->log('Created taxonomy (:subject.name)');

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\TaxonomyRequest  $request
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return \App\Http\Resources\TaxonomyResource
     */
    public function update(TaxonomyRequest $request, Taxonomy $taxonomy)
    {
        $taxonomy->update($request->validated());

        if ($request->fieldset && (! isset($taxonomy->fieldset) || $taxonomy->fieldset->id !== $request->fieldset)) {
            $taxonomy->attachFieldset($request->fieldset);
        } elseif (! $request->fieldset) {
            $taxonomy->detachFieldset();
        }

        activity()
            ->performedOn($taxonomy)
            ->withProperties([
                'icon' => 'sitemap',
                'link' => 'taxonomies/'.$taxonomy->id.'/edit',
            ])
            ->log('Updated taxonomy (:subject.name)');

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function destroy(Taxonomy $taxonomy)
    {
        $this->authorize('taxonomies.delete');

        activity()
            ->performedOn($taxonomy)
            ->withProperties([
                'icon' => 'sitemap',
            ])
            ->log('Deleted taxonomy (:subject.name)');

        $taxonomy->delete();
    }
}
