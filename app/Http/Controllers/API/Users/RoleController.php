<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API\Users;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResource;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('roles.show');

        $roles = Role::orderBy('name')->paginate(25);

        return RoleResource::collection($roles);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        $this->authorize('roles.show');

        return new RoleResource($role);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('roles.create');

        $rules = [
            'name'        => 'required',
            'slug'        => 'required',
            'description' => 'sometimes',
            'special'     => 'sometimes',
        ];

        $attributes            = $request->validate($rules);
        $attributes['special'] = $attributes['special'] ?? null;

        $role = Role::create($attributes);

        activity()
            ->performedOn($role)
            ->withProperties([
                'icon' => 'id-badge',
                'link' => 'roles/'.$role->id.'/edit',
            ])
            ->log('Created user role (:subject.name)');

        return new RoleResource($role);
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

        activity()
            ->performedOn($role)
            ->withProperties([
                'icon' => 'id-badge',
                'link' => 'roles/'.$role->id.'/edit',
            ])
            ->log('Updated user role (:subject.name)');

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

        activity()
            ->performedOn($role)
            ->withProperties([
                'icon' => 'id-badge',
            ])
            ->log('Deleted user role (:subject.name)');

        $role->delete();
    }
}
