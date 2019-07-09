<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Retrieve the user model.
 *
 * @return mixed
 */
function user()
{
    return app()->make(App\Models\User::class);
}

/**
 * Retrieve the role model.
 *
 * @return mixed
 */
function role()
{
    return app()->make(App\Models\Role::class);
}

/**
 * Retrieve the permission model.
 *
 * @return mixed
 */
function permission()
{
    return app()->make(App\Models\Permission::class);
}
