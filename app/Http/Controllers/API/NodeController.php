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

use App\Models\Menu;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\NodeResource;
use App\Services\Builders\Menu as Builder;

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
     * @param  \App\Models\Menu  $menu
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
            $node->{$relationship->handle}()->sync($request->input($relationship->handle));
        }

        activity()
            ->performedOn($node)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'menus/'.$menu->handle.'//edit/' . $node->id,
            ])
            ->log('Created '.strtolower(Str::singular($menu->name)).' menu node (:subject.name)');

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
            $node->{$relationship->handle}()->sync($request->input($relationship->handle));
        }

        activity()
            ->performedOn($node)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'taxonomies/'.$menu->handle.'//edit/' . $node->id,
            ])
            ->log('Updated '.strtolower(Str::singular($menu->name)).' menu node (:subject.name)');

        return new NodeResource($node);
    }

    public function destroy(Request $request, $menu, $id)
    {
        $this->authorize('node.destroy');

        $menu  = Menu::findOrFail($menu);
        $model = (new Builder($menu->handle))->make();
        $node  = $model->findOrFail($id);

        activity()
            ->performedOn($node)
            ->withProperties([
                'icon' => 'anchor',
            ])
            ->log('Deleted '.strtolower(Str::singular($menu->name)).' menu node (:subject.name)');

        $node->delete();
    }
}
