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
	'name'        => 'Fieldtypes',
    'group'       => 'General',
    'icon'        => 'box-full',
    'description' => 'Manage fieldtypes and where they can be utilized.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Structures',
                'handle'      => 'structures',
                'type'        => 'json',
                'required'    => false,
                'gui'         => false,
            ],
            [
                'name'        => 'Structures',
                'handle'      => 'structures_component',
                'type'        => 'component',
                'component'   => 'settings-fieldtypes',
                'required'    => false,
            ],
        ],
    ],
];