<?php


return [
	'name'        => 'Date & Time',
    'group'       => 'General',
    'icon'        => 'calendar-day',
    'description' => 'Configure your CMS date and time settings.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Date Format',
                'handle'      => 'date_format',
                'description' => 'How should dates be displayed across the website and control panel?',
                'type'        => 'select',
                'options'     => [
                    'M d, Y' => 'December 9, 2016',
                    'Y/m/d'  => '2016/12/09',
                    'Y-m-d'  => '2016-12-09',
                ],
                'default'     => 'M d, Y',
            ],
            [
                'name'        => 'Time Format',
                'handle'      => 'time_format',
                'description' => 'How should the time be displayed across the website and control panel?',
                'type'        => 'select',
                'options'     => [
                    'h:i a' => '01:05 pm',
                    'H:i'   => '13:05',
                ],
                'default'     => 'h:i a',
            ],
        ],
    ],
];