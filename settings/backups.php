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
	'name'        => 'Backups',
	'group'       => 'Services',
	'icon'        => 'save',
	'description' => 'Configure backup schedule and cleanup strategy settings.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Scheduled Backups',
                'handle'      => 'scheduled_backups',
                'description' => 'Control whether backups will run on a regular schedule or not.',
                'type'        => 'select',
                'options'     => [ 'enabled'  => 'Enabled', 'disabled' => 'Disabled' ],
                'default'     => 'enabled',
            ],
        ],
    ],
];