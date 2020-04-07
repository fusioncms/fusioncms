<?php


return [
    'name'        => 'Users',
    'group'       => 'General',
    'icon'        => 'users-cog',
    'description' => 'Configure various user account settings.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Allow Public Registration',
                'handle'      => 'public_registration',
                'description' => 'Control whether or not visitors may register for user accounts.',
                'type'        => 'select',
                'options'     => [
                    'enabled'  => 'Enabled',
                    'disabled' => 'Disabled',
                ],
                'default'     => 'enabled',
            ],
            [
                'name'        => 'Welcome E-mail',
                'handle'      => 'user_email_welcome',
                'description' => 'Send welcome e-mail when new user finishes registration process.',
                'type'        => 'select',
                'options'     => [
                    'enabled'  => 'Enabled',
                    'disabled' => 'Disabled',
                ],
                'default'     => 'enabled',
            ],
            [
                'name'        => 'E-mail Verification',
                'handle'      => 'user_email_verification',
                'description' => 'Choose whether e-mail verification is required for new registrations (recommended).',
                'type'        => 'select',
                'options'     => [
                    'enabled'  => 'Enabled',
                    'disabled' => 'Disabled',
                ],
                'default'     => 'enabled',
            ],
            [
                'name'        => 'Default User Role',
                'handle'      => 'default_user_role',
                'description' => 'Choose default role assigned to new registrants.',
                'type'        => 'select',
                'options'     => [
                    'user'  => 'User',
                    'guest' => 'Guest',
                ],
                'default'     => 'user',
            ],
        ],
    ],
];