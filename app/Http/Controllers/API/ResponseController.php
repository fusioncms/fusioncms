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

use App\Models\Form;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ResponseResource;
use App\Services\Builders\Form as Builder;

class ResponseController extends Controller
{
    public function index($slug)
    {
        $responses = Form::where('slug', $slug)
            ->firstOrFail()
            ->responses()
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return ResponseResource::collection($responses);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Form  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug, $id)
    {
        $form  = Form::where('slug', $slug)->firstOrFail();
        $model = (new Builder($form->handle))->make();
        $response  = $model->find($id);

        return new ResponseResource($response);
    }

    public function store(Request $request, $slug)
    {
        $this->authorize('response.create');

        $form          = Form::where('slug', $slug)->firstOrFail();
        $collection    = (new Builder($form->handle))->make();
        $relationships = [];

        $rules = [
            'name'   => 'required',
            'handle' => 'sometimes',
        ];

        if(isset($form->fieldset)) {
            $fields        = $form->fieldset->database();
            $relationships = $form->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes              = $request->validate($rules);
        $attributes['form_id'] = $form->id;

        $response = $collection->create($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($response, $relationship);
        }

        activity()
            ->performedOn($response)
            ->withProperties([
                'icon' => $form->icon,
                'link' => 'taxonomies/'.$form->handle.'//edit/' . $response->id,
            ])
            ->log('Created '.Str::singular($form->name).' (:subject.name)');

        return new ResponseResource($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $form
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug, $id)
    {
        $this->authorize('response.update');

        $form      = Form::where('slug', $slug)->firstOrFail();
        $response          = (new Builder($form->handle))->make()->find($id);
        $relationships = [];
        $rules         = [
            'name' => 'required',
            'handle' => 'sometimes',
        ];

        if(isset($form->fieldset)) {
            $fields        = $form->fieldset->database();
            $relationships = $form->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $response->{$handle} = $value;
        }

        $response->update($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($response, $relationship);
        }

        activity()
            ->performedOn($response)
            ->withProperties([
                'icon' => $form->icon,
                'link' => 'taxonomies/'.$form->handle.'//edit/' . $response->id,
            ])
            ->log('Updated '.Str::singular($form->name).' (:subject.name)');

        return new ResponseResource($response);
    }

    public function destroy(Request $request, $slug, $id)
    {
        $this->authorize('response.destroy');

        $form = Form::where('slug', $slug)->firstOrFail();
        $model    = (new Builder($form->handle))->make();
        $response    = $model->findOrFail($id);

        activity()
            ->performedOn($response)
            ->withProperties([
                'icon' => $form->icon,
            ])
            ->log('Deleted '.Str::singular($form->name).' (:subject.name)');

        $response->delete();
    }
}