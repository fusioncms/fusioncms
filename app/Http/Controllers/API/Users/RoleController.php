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
use App\Http\Requests\RoleRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResource;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Support\Collection
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
     * @return \App\Http\Resources\RoleResource
     */
    public function show(Role $role)
    {
        $this->authorize('roles.show');

        return new RoleResource($role);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\RoleRequest  $request
     * @return \App\Http\Resources\RoleResource
     */
    public function store(RoleRequest $request)
    {
        $role = Role::create($request->validated());

        return new RoleResource($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\RoleRequest  $request
     * @param  \App\Models\Role  $role
     * @return \App\Http\Resources\RoleResource
     */
    public function update(RoleRequest $request, Role $role)
    {
        $role->update($request->validated());

        return new RoleResource($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return void
     */
    public function destroy(Role $role)
    {
        $this->authorize('roles.delete');

        $role->delete();
    }
}
