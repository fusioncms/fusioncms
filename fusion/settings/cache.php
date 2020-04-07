<?php


return [
	'name'        => 'Cache',
    'group'       => 'General',
    'icon'        => 'bolt',
    'description' => 'Flush your websites cache.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Clear Cache',
                'handle'      => 'clear_cache_component',
                'description' => 'Clear the cache files.',
                'type'        => 'component',
                'component'   => 'settings-cache',
                'required'    => false,
            ],
        ],
    ],
];