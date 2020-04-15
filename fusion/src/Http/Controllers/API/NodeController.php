<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Menu;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\NodeResource;
use Fusion\Services\Builders\Menu as Builder;

class NodeController extends Controller
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
     * @param  \Fusion\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show($menu, $id)
    {
        $menu  = Menu::find($menu);
        $model = (new Builder($menu->handle))->make();
        $node  = $model->find($id);

        return new NodeResource($node);
    }

    public function store(Request $request, $menu)
    {
        $this->authorize('node.create');

        $menu          = Menu::find($menu);
        $model         = (new Builder($menu->handle))->make();
        $relationships = [];

        $rules = [
            'name'       => 'required',
            'url'        => 'sometimes',
            'new_window' => 'sometimes',
            'parent_id'  => 'sometimes',
            'status'     => 'sometimes',
        ];

        if(isset($menu->fieldset)) {
            $fields        = $menu->fieldset->database();
            $relationships = $menu->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes            = $request->validate($rules);
        $attributes['menu_id'] = $menu->id;
        $attributes['order']   = $model->orderLast();

        $node = $model->create($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($node, $relationship);
        }

        return new NodeResource($node);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $menu, $id)
    {
        $this->authorize('node.update');

        $menu          = Menu::findOrFail($menu);
        $node          = (new Builder($menu->handle))->make()->findOrFail($id);
        $relationships = [];
        $rules         = [
            'name'       => 'required',
            'url'        => 'sometimes',
            'new_window' => 'sometimes',
            'parent_id'  => 'sometimes',
            'status'     => 'sometimes',
        ];

        if(isset($menu->fieldset)) {
            $fields        = $menu->fieldset->database();
            $relationships = $menu->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $node->{$handle} = $value;
        }

        $node->update($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($node, $relationship);
        }

        return new NodeResource($node);
    }

    public function destroy(Request $request, $menu, $id)
    {
        $this->authorize('node.destroy');

        $menu  = Menu::findOrFail($menu);
        $model = (new Builder($menu->handle))->make();
        $node  = $model->findOrFail($id);

        $node->delete();
    }
}
