<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [

    'models' => [
        /*
        |--------------------------------------------------------------------------
        | Model References
        |--------------------------------------------------------------------------
        |
        | Shinobi needs to know which Eloquent Models should be referenced during
        | actions such as registering and checking for permissions, assigning
        | permissions to roles and users, and assigning roles to users.
        */

        'role'       => App\Models\Role::class,
        'permission' => App\Models\Permission::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Use Migrations
    |--------------------------------------------------------------------------
    |
    | Shinobi comes packaged with everything out of the box for you, including
    | migrations. If instead you wish to customize or extend Shinobi beyond
    | its offering, you may disable the provided migrations for your own.
    */

    'migrate' => false,

];
