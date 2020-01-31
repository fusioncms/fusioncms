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
	'name'        => 'API',
	'group'       => 'General',
	'icon'        => 'plug',
	'description' => 'Configure access to your websites API.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Personal Access Tokens',
                'handle'      => 'personal_access_tokens',
                'description' => 'Control whether personal access tokens are allowed or not.',
                'type'        => 'select',
                'options'     => [ 'enabled'  => 'Enabled', 'disabled' => 'Disabled' ],
                'default'     => 'disabled',
            ],
        ],
    ],
];