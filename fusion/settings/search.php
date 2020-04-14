<?php


return [
	'name'        => 'Search',
    'group'       => 'Services',
    'icon'        => 'search',
    'description' => 'Configure your desired search provider.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Driver',
                'handle'      => 'search_driver',
                'description' => 'Select the desired search driver.',
                'type'        => 'select',
                'options'     => [
                    'tntsearch' => 'TNTSearch',
                    'algolia'   => 'Algolia',
                ],
                'default'     => 'tntsearch',
            ],
        ],
        'TNTSearch' => [
            [
                'name'        => 'TNTSearch Fuzziness',
                'handle'      => 'tntsearch_fuzziness',
                'description' => 'Fuzzy search is a process that locates Web pages that are likely to be relevant to a search argument even when the argument does not exactly correspond to the desired information.',
                'type'        => 'select',
                'options'     => [
                    'true'  => 'Enabled',
                    'false' => 'Disabled',
                ],
                'default'     => 'false',
                'required'    => false,
            ],
            [
                'name'        => 'TNTSearch Boolean',
                'handle'      => 'tntsearch_boolean',
                'description' => 'Boolean search is a type of search allowing users to combine keywords with operators (or modifiers) such as AND, NOT and OR to further produce more relevant results. This would limit the search results to only those documents containing the keywords.',
                'type'        => 'select',
                'options'     => [
                    'true'  => 'Enabled',
                    'false' => 'Disabled',
                ],
                'default'     => 'false',
                'required'    => false,
            ],
        ],
        'Algolia' => [
            [
                'name'        => 'Algolia App ID',
                'handle'      => 'algolia_app_id',
                'description' => 'This is your unique application identifier. It is used to identify yourself to the Algolia API.',
                'required'    => false,
            ],

            [
                'name'        => 'Algolia Secret',
                'handle'      => 'algolia_secret',
                'description' => 'Please keep this secret and use it ONLY from your FusionCMS website => this key is used to create, update and DELETE your search indices.',
                'required'    => false,
            ],
        ],
    ],
];