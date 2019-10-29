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

use App\Models\Matrix;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\EntryResource;
use App\Services\Builders\Collection;

class CollectionController extends Controller
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
     * @param  \App\Models\Matrix  $matrix
     * @return \Illuminate\Http\Response
     */
    public function show($matrix, $id)
    {
        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $model  = (new Collection($matrix->handle))->make();
        $entry  = $model->find($id);

        return new EntryResource($entry);
    }

    public function store(Request $request, $matrix)
    {
        $this->authorize('entry.create');

        $matrix     = Matrix::where('slug', $matrix)->firstOrFail();
        $collection = (new Collection($matrix->handle))->make();
        
        $relationships = [];
        $rules         = [
            'name'   => 'required',
            'slug'   => 'sometimes',
            'status' => 'required|boolean',
        ];

        if(isset($matrix->fieldset)) {
            $fields = $matrix->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);
                
                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes              = $request->validate($rules);
        $attributes['matrix_id'] = $matrix->id;

        $entry = $collection->create($attributes);

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $matrix->icon,
                'link' => 'collections/'.$matrix->slug.'/edit/' . $entry->id,
            ])
            ->log('Created '.Str::singular($matrix->name).' (:subject.name)');

        return new EntryResource($entry);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $matrix
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $matrix, $id)
    {
        $this->authorize('entry.update');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $entry  = (new Collection($matrix->handle))->make()->find($id);
        $relationships = [];
        $rules         = [
            'name'      => 'required',
            'slug'      => 'sometimes',
            'status'    => 'required|boolean',
        ];

        if(isset($matrix->fieldset)) {
            $fields = $matrix->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                return is_null($fieldtype->column);
            });

            $relationships = $matrix->fieldset->fields->reject(function($field) {
                $fieldtype = fieldtypes()->get($field->type);

                return is_null($fieldtype->getRelationship());
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

        foreach ($relationships as $relationship) {
            $entry->{$relationship->handle}()->sync($request->input($relationship->handle));
        }

        return new EntryResource($entry);
    }

    public function destroy(Request $request, $matrix, $id)
    {
        $this->authorize('entry.destroy');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $model  = (new Collection($matrix->handle))->make();
        $entry  = $model->findOrFail($id);

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $matrix->icon,
            ])
            ->log('Deleted entry (:subject.name)');

        $entry->delete();
    }
}
