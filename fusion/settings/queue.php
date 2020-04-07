<?php


return [
	'name'        => 'Queue',
    'group'       => 'Services',
    'icon'        => 'inbox',
    'description' => 'Configure your desired queue provider.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Queue Driver',
                'handle'      => 'queue_driver',
                'description' => 'Queues allow you to defer the processing of a time consuming task, such as sending an email, until a later time. Sync is useful for debugging, but the preferred option for production environments is "Database"',
                'type'        => 'select',
                'options'     => [
                    'database' => 'Database',
                    'sync'     => 'Sync',
                ],
                'default'     => 'sync',
            ],
        ],
    ],
];