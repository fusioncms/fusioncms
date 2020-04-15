<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Models\Role;
use Illuminate\Http\Request;
use Fusion\Http\Requests\RoleRequest;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\RoleResource;

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
     * @param  \Fusion\Models\Role  $role
     * @return \Fusion\Http\Resources\RoleResource
     */
    public function show(Role $role)
    {
        $this->authorize('roles.show');

        return new RoleResource($role);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Fusion\Http\Requests\RoleRequest  $request
     * @return \Fusion\Http\Resources\RoleResource
     */
    public function store(RoleRequest $request)
    {
        $role = Role::create($request->validated());

        return new RoleResource($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\RoleRequest  $request
     * @param  \Fusion\Models\Role  $role
     * @return \Fusion\Http\Resources\RoleResource
     */
    public function update(RoleRequest $request, Role $role)
    {
        $role->update($request->validated());

        return new RoleResource($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Fusion\Models\Role  $role
     * @return void
     */
    public function destroy(Role $role)
    {
        $this->authorize('roles.delete');

        $role->delete();
    }
}
