<?php


return [
    'name'        => 'Updates',
    'group'       => 'General',
    'icon'        => 'sync',
    'description' => 'Configure CMS auto-updates.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Auto Update',
                'handle'      => 'auto_update',
                'description' => 'If enabled, the CMS will check in periodically to determine if there is a new release available for download. If so, the CMS will download and automatically install the update.',
                'type'        => 'select',
                'options'     => [
                    'enabled'  => 'Enabled',
                    'disabled' => 'Disabled',
                ],
                'default'     => 'enabled',
            ],
        ],
    ],
];