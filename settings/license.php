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
    'name'        => 'License',
    'group'       => 'General',
    'icon'        => 'key',
    'description' => 'Register your FusionCMS license key.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'License Key',
                'handle'      => 'license_key',
                'description' => 'Enter a valid license key to receive support and automatic updates.',
                'required'    => false,
            ],
        ],
    ],
];