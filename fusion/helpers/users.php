<?php

/**
 * Retrieve the user model.
 *
 * @return mixed
 */
function user()
{
    return app()->make(Fusion\Models\User::class);
}

/**
 * Retrieve the role model.
 *
 * @return mixed
 */
function role()
{
    return app()->make(Fusion\Models\Role::class);
}

/**
 * Retrieve the permission model.
 *
 * @return mixed
 */
function permission()
{
    return app()->make(Fusion\Models\Permission::class);
}
