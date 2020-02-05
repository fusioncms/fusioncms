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