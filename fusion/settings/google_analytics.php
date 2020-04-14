<?php


return [
    'name'        => 'Google Analytics',
    'group'       => 'Services',
    'icon'        => 'chart-line',
    'description' => 'Configure your Google Analytic settings.',
    'settings'    => [
        'Tracking' => [
            [
                'name'        => 'Tracking ID',
                'handle'      => 'analytic_tracking_id',
                'description' => 'Your Google Tracking ID. Should look like UA-xxxxxxxx-x.',
            ],
        ],
        'Insights' => [
            [
                'name'        => 'View ID',
                'handle'      => 'analytic_view_id',
                'description' => 'Your Google Analytics View ID.',
                'required'    => false,
                'override'    => 'analytics.view_id',
            ],
            [
                'name'        => 'Credentials',
                'handle'      => 'analytic_credentials',
                'description' => 'Your Google Analytics credentials file.',
                'type'        => 'file',
                'required'    => false,
            ],
        ],
    ],
];