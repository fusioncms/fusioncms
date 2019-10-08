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
use App\Services\Builders\Taxonomy as Builder;

class TaxonomyController extends Controller
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
        $entry    = $model->find($id);

        return new TaxonomyResource($entry);
    }

    public function store(Request $request, $taxonomy)
    {
        $this->authorize('entry.create');

        $taxonomy     = Taxonomy::where('slug', $taxonomy)->firstOrFail();
        $collection = (new Builder($taxonomy->handle))->make();
        
        $rules = [
            'name'      => 'required',
            'slug'      => 'sometimes',
        ];

        if(isset($taxonomy->fieldset)) {
            $fields = $taxonomy->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);
                
                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }    

        $attributes              = $request->validate($rules);
        $attributes['taxonomy_id'] = $taxonomy->id;

        $entry = $collection->create($attributes);

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $taxonomy->icon,
                'link' => 'taxonomies/'.$taxonomy->handle.'//edit/' . $entry->id,
            ])
            ->log('Created '.Str::singular($taxonomy->name).' (:subject.name)');

        return new TaxonomyResource($entry);
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
        $this->authorize('entry.update');

        $taxonomy     = Taxonomy::where('slug', $taxonomy)->firstOrFail();
        $entry = (new Builder($taxonomy->handle))->make()->find($id);
        $rules = [
            'name'      => 'required',
            'slug'      => 'sometimes',
        ];

        if(isset($taxonomy->fieldset)) {
            $fields = $taxonomy->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }    

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $entry->{$handle} = $value;
        }

        $entry->update($attributes);

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $taxonomy->icon,
                'link' => 'taxonomies/'.$taxonomy->handle.'//edit/' . $entry->id,
            ])
            ->log('Updated '.Str::singular($taxonomy->name).' (:subject.name)');

        return new TaxonomyResource($entry);
    }

    public function destroy(Request $request, $taxonomy, $id)
    {
        $this->authorize('entry.destroy');

        $taxonomy = Taxonomy::where('slug', $taxonomy)->firstOrFail();
        $model    = (new Builder($taxonomy->handle))->make();
        $entry    = $model->findOrFail($id);

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $taxonomy->icon,
            ])
            ->log('Deleted '.Str::singular($taxonomy->name).' (:subject.name)');

        $entry->delete();
    }
}
