<?php


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