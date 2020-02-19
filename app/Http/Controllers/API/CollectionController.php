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

use ParseError;
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
            'name'   => 'sometimes',
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
            $relationship->type()->persistRelationship($entry, $relationship);
        }

        // Autogenerate name/slug
        if (! $matrix->show_name_field) {
            $entry->name = $this->compileBladeString($matrix->name_format, $entry);
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
        $rules  = [
            'name'     => 'sometimes',
            'slug'     => 'sometimes',
            'status'   => 'required|boolean',
        ];

        if(isset($matrix->fieldset)) {
            foreach ($matrix->fieldset->database() as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $entry->{$handle} = $value;
        }

        $entry->update($attributes);

        if (isset($matrix->fieldset)) {
            foreach ($matrix->fieldset->relationships() as $relationship) {
                $relationship->type()->persistRelationship($entry, $relationship);
            }
        }
        
        if (! $matrix->show_name_field) {
            $entry->name = $this->compileBladeString($matrix->name_format, $entry);
            $entry->slug = Str::slug($entry->name);
            
            $entry->save();
        }

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $matrix->icon,
                'link' => 'collections/'.$matrix->slug.'/edit/' . $entry->id,
            ])
            ->log('Updated '.Str::singular($matrix->name).' (:subject.name)');

        return new EntryResource($entry);
    }

    public function destroy(Request $request, $matrix, $id)
    {
        $this->authorize('entry.destroy');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $model  = (new Collection($matrix->handle))->make();
        $entry  = $model->findOrFail($id);

        if(isset($matrix->fieldset)) {
            foreach ($matrix->fieldset->relationships() as $relationship) {
                fieldtypes()->get($relationship->type)->destroyRelationship($entry, $relationship);
            }
        }

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $matrix->icon,
            ])
            ->log('Deleted entry (:subject.name)');

        $entry->delete();
    }
    
    /**
     * Compile a blade string in a safe and controlled manner.
     * 
     * @param  string  $string
     * @param  Entry  $entry
     * @return string
     */
    protected function compileBladeString($string, $entry)
    {
        preg_match_all('/\{(.*?)\}/', $string, $matches);
        
        foreach ($matches[1] as $index => $match) {
            try {
                $reference = explode('->', $match)[0];

                if (in_array($reference, $entry->getReferences())) {
                    ob_start();

                    eval('echo $entry->'.$match.';');
                    
                    $replace[$index] = ob_get_clean();
                } else {
                    $replace[$index] = $matches[0][$index];
                }
            } catch (ParseError $e) {
                ob_get_clean();

                $replace[$index] = $match;
            }
        }

        $compiled = str_replace($matches[0], $replace, $string);

        return $compiled;
    }
}
