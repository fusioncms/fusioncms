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
use App\Http\Resources\TaxonomyResource;

class TaxonomyGroupsController extends Controller
{
    /**
     * Validation rules used for create and update
     * actions.
     *
     * @var array
     */
    protected $rules = [
        'name'        => 'required',
        'handle'      => 'required',
        'description' => 'sometimes',
        'fieldset'    => 'sometimes',

        'sidebar'     => 'required|boolean',
        'icon'        => 'sometimes',

        'route'       => 'sometimes',
        'template'    => 'sometimes',
    ];

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('taxonomies.create');

        $attributes = collect($request->validate($this->rules));
        
        $attributes->put('slug', Str::slug($attributes->get('handle'), '-'));
        
        $taxonomy = Taxonomy::create($attributes->except('fieldset')->all());

        if ($attributes->get('fieldset')) {
            $taxonomy->attachFieldset($attributes->get('fieldset'));
        }

        activity()
            ->performedOn($taxonomy)
            ->withProperties([
                'icon' => 'sitemap',
                'link' => 'taxonomies/edit/' . $taxonomy->id,
            ])
            ->log('Created taxonomy (:subject.name)');

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Taxonomy $taxonomy)
    {
        $this->authorize('taxonomies.update');

        $attributes = collect($request->validate($this->rules));

        $attributes->put('slug', Str::slug($attributes->get('handle'), '-'));

        $taxonomy->update($attributes->except('fieldset')->all());

        if ($attributes->get('fieldset') && (!isset($taxonomy->fieldset) || ($taxonomy->fieldset->id !== $attributes->get('fieldset')))) {
            $taxonomy->attachFieldset($attributes->get('fieldset'));
        } else if (!$attributes->get('fieldset')) {
            $taxonomy->detachFieldset();
        }

        activity()
            ->performedOn($taxonomy)
            ->withProperties([
                'icon' => 'sitemap',
                'link' => 'taxonomies/edit/' . $taxonomy->id,
            ])
            ->log('Updated taxonomy (:subject.name)');

        return new TaxonomyResource($taxonomy);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return \Illuminate\Http\Response
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
