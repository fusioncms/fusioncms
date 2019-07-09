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

use App\Models\Field;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FieldResource;

class MatrixFieldController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $container = null)
    {
        $this->authorize('fields.show');

        if (is_null($container)) {
            $fields = Field::orderBy('name')->paginate(25);
        } else {
            $fields = Field::where('container_type', $container)->orderBy('name');
        }

        return FieldResource::collection($fields);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Field  $field
     * @return \Illuminate\Http\Response
     */
    public function show(Field $field)
    {
        $this->authorize('fields.show');

        return new FieldResource($field);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('fields.create');

        $rules = [
            'name'           => 'required',
            'handle'         => 'required',
            'help'           => 'sometimes',
            'required'       => 'sometimes',
            'fieldtype'      => 'required',
            'placement'      => 'required',
            'section'        => 'sometimes',
            'options'        => 'sometimes',
            'status'         => 'required',
            'container_type' => 'required',
            'container_id'   => 'required',
        ];

        $attributes = $request->validate($rules);

        // dd($attributes);

        $field = Field::create($attributes);

        return new FieldResource($field);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $this->authorize('roles.update');

        $rules = [
            'name'        => 'required',
            'slug'        => 'required',
            'description' => 'sometimes',
            'special'     => 'sometimes',
        ];

        $attributes = $request->validate($rules);

        if (empty($attributes['special'])) {
            $attributes['special'] = null;
        }

        $role->update($attributes);

        return new RoleResource($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        $this->authorize('roles.delete');

        $role->delete();
    }
}
