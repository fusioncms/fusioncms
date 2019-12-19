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
        $entry  = $model->findOrFail($id);

        return new EntryResource($entry);
    }

    public function store(Request $request, $matrix)
    {
        $this->authorize('entry.create');

        $matrix     = Matrix::where('slug', $matrix)->firstOrFail();
        $collection = (new Collection($matrix->handle))->make();
        
        $relationships = [];
        $rules         = [
            'name'   => 'sometimes|regex:/^[A-z]/i',
            'slug'   => 'sometimes',
            'status' => 'required|boolean',
        ];

        if(isset($matrix->fieldset)) {
            $fields        = $matrix->fieldset->database();
            $relationships = $matrix->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = $field->validation ?: 'sometimes';
            }
        }

        $attributes              = $request->validate($rules);
        $attributes['matrix_id'] = $matrix->id;

        $entry = $collection->create($attributes);

        foreach ($relationships as $relationship) {
            $entry->{$relationship->handle}()->sync($request->input($relationship->handle));
        }

        // Autogenerate name/slug
        if (! $matrix->show_title_field) {
            $find    = ['{', '}'];
            $replace = ['{{ $entry->', ' }}'];
            $format  = str_replace($find, $replace, $matrix->title_format);

            $entry->name = $this->compileBladeString($format, $entry);
            $entry->slug = Str::slug($entry->name);

            $entry->save();
        }

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
            'name'     => 'sometimes',
            'slug'     => 'sometimes',
            'status'   => 'required|boolean',
        ];

        if(isset($matrix->fieldset)) {
            $fields        = $matrix->fieldset->database();
            $relationships = $matrix->fieldset->relationships();

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

        // Autogenerate name/slug
        if (! $matrix->show_title_field) {
            $find    = ['{', '}'];
            $replace = ['{{ $entry->', ' }}'];
            $format  = str_replace($find, $replace, $matrix->title_format);

            $entry->name = $this->compileBladeString($format, $entry);
            $entry->slug = Str::slug($entry->name);

            $entry->save();
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

    protected function compileBladeString($string, $entry)
    {
        $generated = \Blade::compileString($string);

        ob_start();

        try {
            eval('?>' . $generated);
        } catch (\Exception $e) {
            ob_get_clean();
            throw $e;
        }

        $compiled = ob_get_clean();

        return $compiled;
    }
}
