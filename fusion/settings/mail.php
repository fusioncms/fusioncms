<?php


return [
    'name'        => 'Mail',
    'group'       => 'Services',
    'icon'        => 'mail-bulk',
    'description' => 'Configure your desired email provider.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Driver',
                'handle'      => 'mail_driver',
                'description' => 'Select the desired e-mail driver.',
                'type'        => 'select',
                'options'     => ['smtp' => 'SMTP', 'sparkpost' => 'SparkPost', 'mailgun' => 'Mailgun', 'mandrill' => 'Mandrill', 'log' => 'Log'],
                'default'     => 'smtp',
                'override'    => 'mail.driver',
            ],
            [
                'name'        => 'From Address',
                'handle'      => 'mail_server',
                'description' => 'All e-mails to users will come from this e-mail address.',
                'default'     => 'server@example.com',
                'override'    => 'mail.from.address',
            ],
            [
                'name'        => 'From Name',
                'handle'      => 'mail_name',
                'description' => 'E-mail sent out to users will be attributed with this name.',
                'default'     => 'Wendell',
                'override'    => 'mail.from.name',
            ],
            [
                'name'        => 'Send Test Email',
                'handle'      => 'mail_test',
                'description' => 'Send a test email using the currently configured mail settings.',
                'type'        => 'partial',
                'options'     => ['view' => 'mail::partials.settings.test_email'],
            ],
        ],
        'SMTP' => [
            [
                'name'        => 'Host',
                'handle'      => 'mail_smtp_host',
                'description' => 'The host name of your SMTP server.',
                'default'     => 'smtp.example.com',
                'override'    => 'mail.host',
            ],
            [
                'name'        => 'Port',
                'handle'      => 'mail_smtp_port',
                'description' => 'The port number of your SMTP server.',
                'default'     => '587',
                'override'    => 'mail.port',
            ],
            [
                'name'        => 'SMTP Username',
                'handle'      => 'mail_smtp_username',
                'description' => 'The username for your SMTP server.',
                'override'    => 'mail.username',
            ],
            [
                'name'        => 'SMTP Password',
                'handle'      => 'mail_smtp_password',
                'description' => 'The password for your SMTP server.',
                'override'    => 'mail.password',
            ],
        ],
        'Sparkpost' => [
            [
                'name'        => 'Secret',
                'handle'      => 'mail_sparkpost_secret',
                'description' => 'Secret key assigned after setting up your SparkPost account.',
            ],
        ],
        'Mailgun' => [
            [
                'name'        => 'Domain',
                'handle'      => 'mail_mailgun_domain',
                'description' => 'Domain of your Mailgun account.',
            ],
            [
                'name'        => 'Secret',
                'handle'      => 'mail_mailgun_secret',
                'description' => 'Secret key assigned after setting up your Mailgun account.',
            ],
        ],
        'Mandrill' => [
            [
                'name'        => 'Secret',
                'handle'      => 'mail_mandrill_secret',
                'description' => 'Secret key assigned after setting up your Mandrill account.',
            ],
        ],
        'Subjects' => [
            [
                'name'        => 'User Registered Subject',
                'handle'      => 'mail_subject_user_registered',
                'description' => 'Email subject for user welcome message.',
                'default'     => 'Welcome!',
            ],
            [
                'name'        => 'User Verification Subject',
                'handle'      => 'mail_subject_user_verification',
                'description' => 'Email subject for user verification.',
                'default'     => 'Please verify your email',
            ],
            [
                'name'        => 'Forgot Password Subject',
                'handle'      => 'mail_subject_user_reset_password',
                'description' => 'Email subject for requesting a password reset.',
                'default'     => 'Password Reset Request',
            ],
        ],
        'Test' => [
            [
                'type'      => 'component',
                'name'      => 'Mail Test',
                'handle'    => 'mail_test_component',
                'component' => 'settings-mail-test',
                'required'  => false,
            ],
        ],
    ],
];