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
	'name'        => 'Queue',
    'group'       => 'Services',
    'icon'        => 'inbox-out',
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