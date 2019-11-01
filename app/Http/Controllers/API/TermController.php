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
use App\Http\Resources\TermResource;
use App\Services\Builders\Taxonomy as Builder;

class TermController extends Controller
{
    /**
     * Validation rules used for create and update
     * actions.
     *
     * @var array
     */
    protected $rules = [
        //
    ];

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return \Illuminate\Http\Response
     */
    public function show($taxonomy, $id)
    {
        $taxonomy = Taxonomy::where('slug', $taxonomy)->firstOrFail();
        $model    = (new Builder($taxonomy->handle))->make();
        $term    = $model->find($id);

        return new TermResource($term);
    }

    public function store(Request $request, $taxonomy)
    {
        $this->authorize('term.create');

        $taxonomy      = Taxonomy::where('slug', $taxonomy)->firstOrFail();
        $collection    = (new Builder($taxonomy->handle))->make();
        $relationships = [];
        
        $rules = [
            'name'      => 'required',
            'slug'      => 'sometimes',
        ];

        if(isset($taxonomy->fieldset)) {
            $fields        = $taxonomy->fieldset->database();
            $relationships = $taxonomy->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }    

        $attributes              = $request->validate($rules);
        $attributes['taxonomy_id'] = $taxonomy->id;

        $term = $collection->create($attributes);

        foreach ($relationships as $relationship) {
            $term->{$relationship->handle}()->sync($request->input($relationship->handle));
        }

        activity()
            ->performedOn($term)
            ->withProperties([
                'icon' => $taxonomy->icon,
                'link' => 'taxonomies/'.$taxonomy->handle.'//edit/' . $term->id,
            ])
            ->log('Created '.Str::singular($taxonomy->name).' (:subject.name)');

        return new TermResource($term);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $taxonomy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $taxonomy, $id)
    {
        $this->authorize('term.update');

        $taxonomy      = Taxonomy::where('slug', $taxonomy)->firstOrFail();
        $term          = (new Builder($taxonomy->handle))->make()->find($id);
        $relationships = [];
        $rules         = [
            'name' => 'required',
            'slug' => 'sometimes',
        ];

        if(isset($taxonomy->fieldset)) {
            $fields        = $taxonomy->fieldset->database();
            $relationships = $taxonomy->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }    

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $term->{$handle} = $value;
        }

        $term->update($attributes);

        foreach ($relationships as $relationship) {
            $term->{$relationship->handle}()->sync($request->input($relationship->handle));
        }

        activity()
            ->performedOn($term)
            ->withProperties([
                'icon' => $taxonomy->icon,
                'link' => 'taxonomies/'.$taxonomy->handle.'//edit/' . $term->id,
            ])
            ->log('Updated '.Str::singular($taxonomy->name).' (:subject.name)');

        return new TermResource($term);
    }

    public function destroy(Request $request, $taxonomy, $id)
    {
        $this->authorize('term.destroy');

        $taxonomy = Taxonomy::where('slug', $taxonomy)->firstOrFail();
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
