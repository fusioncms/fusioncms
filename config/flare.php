<?php

return [

    /*
    |
    |--------------------------------------------------------------------------
    | Flare API key
    |--------------------------------------------------------------------------
    |
    | If you want to send your errors to the Flare service, you can specify
    | the API key of your project here.
    |
    | More info: https://flare.laravel.com/docs/general/creating-a-project
    |
    */

    'key' => env('FLARE_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Reporting options
    |--------------------------------------------------------------------------
    |
    | These options determine which information is being transmitted
    | to Flare.
    |
    */

    'reporting' => [
        'anonymize_ips' => true,
        'collect_git_information' => false,
        'report_queries' => true,
        'maximum_number_of_collected_queries' => 200,
        'report_query_bindings' => true,
        'report_view_data' => true,
    ],
];
