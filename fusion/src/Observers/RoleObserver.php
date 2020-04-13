<?php

namespace Fusion\Observers;

use Fusion\Models\Role;

class RoleObserver
{
    /**
     * Listen to the Role created event.
     *
     * @param  Role  $role
     */
    public function saved(Role $role)
    {
        $role->syncPermissions(
            request()->get('permissions', [])
        );
    }
}
