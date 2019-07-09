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

    /*
    |--------------------------------------------------------------------------
    | Default Search Engine
    |--------------------------------------------------------------------------
    |
    | This option controls the default search connection that gets used while
    | using Laravel Scout. This connection is used when syncing all models
    | to the search service. You should adjust this based on your needs.
    |
    | Supported: "algolia", "tntsearch", "null"
    |
    */

    'driver' => env('SCOUT_DRIVER', 'tntsearch'),

    /*
    |--------------------------------------------------------------------------
    | Index Prefix
    |--------------------------------------------------------------------------
    |
    | Here you may specify a prefix that will be applied to all search index
    | names used by Scout. This prefix may be useful if you have multiple
    | "tenants" or applications sharing the same search infrastructure.
    |
    */

    'prefix' => env('SCOUT_PREFIX', ''),

    /*
    |--------------------------------------------------------------------------
    | Queue Data Syncing
    |--------------------------------------------------------------------------
    |
    | This option allows you to control if the operations that sync your data
    | with your search engines are queued. When this is set to "true" then
    | all automatic data syncing will get queued for better performance.
    |
    */

    'queue' => true,

    /*
    |--------------------------------------------------------------------------
    | Algolia Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your Algolia settings. Algolia is a cloud hosted
    | search engine which works great with Scout out of the box. Just plug
    | in your application ID and admin API key to get started searching.
    |
    */

    'algolia' => [
        'id'     => null,
        'secret' => null,
    ],

    /*
    |--------------------------------------------------------------------------
    | TNT Search Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your TNT Search settings. TNT Search is a
    | fully featured full text search engine written in PHP. Simply point
    | to where you wish to store your index and be off searching!
    |
    */

    'tntsearch' => [
        'storage'   => storage_path('search'),
        'fuzziness' => env('TNTSEARCH_FUZZINESS', false),
        'fuzzy'     => [
            'prefix_length'  => 2,
            'max_expansions' => 50,
            'distance'       => 2,
        ],
        'asYouType'     => false,
        'searchBoolean' => env('TNTSEARCH_BOOLEAN', false),
    ],

];
