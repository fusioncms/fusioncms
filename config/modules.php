<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Path to Modules
    |--------------------------------------------------------------------------
    |
    | Define the path where you'd like to store your modules. Note that if you
    | choose a path that's outside of your public directory, you will need to
    | copy your module assets (CSS, images, etc.) to your public directory.
    |
    */

    'default_location' => 'modules',

    'locations' => [
        'modules' => [
            'driver'    => 'local',
            'path'      => base_path('modules'),
            'namespace' => 'Modules\\',
            'enabled'   => true,
            'provider'  => 'Providers\\ModuleServiceProvider',
            'manifest'  => 'module.json',
            'mapping'   => [
                'Config'              => 'config',
                'Database/Factories'  => 'database/factories',
                'Database/Migrations' => 'database/migrations',
                'Database/Seeds'      => 'database/seeds',
                'Http/Controllers'    => 'src/Http/Controllers',
                'Http/Middleware'     => 'src/Http/Middleware',
                'Providers'           => 'src/Providers',
                'Resources/Lang'      => 'resources/lang',
                'Resources/Views'     => 'resources/views',
                'Routes'              => 'routes',
            ],
        ],
    ],

    'default_driver' => 'local',

    'drivers' => [
        'local' => Caffeinated\Modules\Repositories\LocalRepository::class,
    ],

];
