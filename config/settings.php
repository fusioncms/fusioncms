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

    /*
    |--------------------------------------------------------------------------
    | Sections
    |--------------------------------------------------------------------------
    |
    | Settings are grouped between various sections. This helps organize and
    | make the act of finding a specific setting easier on the user. Each
    | section contains a name, handle, description, and icon.
    |
    */

    'sections' => [

        [
            'name'        => 'API',
            'handle'      => 'api',
            'group'       => 'General',
            'icon'        => 'plug',
            'description' => 'Configure access to your websites API.',
        ],

        [
            'name'        => 'Cache',
            'handle'      => 'cache',
            'group'       => 'General',
            'icon'        => 'bolt',
            'description' => 'Flush your websites cache.',
            'to'          => 'settings.cache',
        ],

        [
            'name'        => 'System',
            'handle'      => 'system',
            'group'       => 'General',
            'icon'        => 'sliders-h',
            'description' => 'Global system settings of your website.',
        ],

        [
            'name'        => 'Date & Time',
            'handle'      => 'date_time',
            'group'       => 'General',
            'icon'        => 'calendar-day',
            'description' => 'Configure your CMS date and time settings.',
        ],

        [
            'name'        => 'License',
            'handle'      => 'license',
            'group'       => 'General',
            'icon'        => 'key',
            'description' => 'Register your FusionCMS license key.',
        ],

        [
            'name'        => 'Google Analytics',
            'handle'      => 'google_analytics',
            'group'       => 'Services',
            'icon'        => 'chart-line',
            'description' => 'Configure your Google Analytic settings.',
        ],

        [
            'name'        => 'Mail',
            'handle'      => 'mail',
            'group'       => 'Services',
            'icon'        => 'mail-bulk',
            'description' => 'Configure your desired email provider.',
        ],

        [
            'name'        => 'Search',
            'handle'      => 'search',
            'group'       => 'Services',
            'icon'        => 'search',
            'description' => 'Configure your desired search provider.',
        ],

        [
            'name'        => 'Queue',
            'handle'      => 'queue',
            'group'       => 'Services',
            'icon'        => 'inbox-out',
            'description' => 'Configure your desired queue provider.',
        ],

        [
            'name'        => 'Updates',
            'handle'      => 'updates',
            'group'       => 'General',
            'icon'        => 'sync',
            'description' => 'Configure CMS auto-updates.',
        ],

        [
            'name'        => 'Users',
            'handle'      => 'users',
            'group'       => 'General',
            'icon'        => 'users-cog',
            'description' => 'Configure various user account settings.',
        ],

        [
            'name'        => 'Files',
            'handle'      => 'files',
            'group'       => 'General',
            'icon'        => 'images',
            'description' => 'Configure accepted filetypes and max upload size.',
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Settings
    |--------------------------------------------------------------------------
    |
    | Here you may configure each available setting found in the CMS.
    | Settings are linked to a relevent section, with the default
    | value and intended fieldtype to be used when displaying.
    |
    */

    'settings' => [

        /*
        |--------------------------------------------------------------------------
        | Google Analytic Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'google_analytics',
            'group'       => 'Tracking',
            'name'        => 'Tracking ID',
            'handle'      => 'analytic_tracking_id',
            'description' => 'Your Google Tracking ID. Should look like UA-xxxxxxxx-x.',
            'type'        => 'text',
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 0,
        ],

        [
            'section'     => 'google_analytics',
            'group'       => 'Insights',
            'name'        => 'View ID',
            'handle'      => 'analytic_view_id',
            'description' => 'Your Google Analytics View ID.',
            'type'        => 'text',
            'default'     => '',
            'required'    => false,
            'gui'         => true,
            'order'       => 0,
        ],

        [
            'section'     => 'google_analytics',
            'group'       => 'Insights',
            'name'        => 'Credentials',
            'handle'      => 'analytic_credentials',
            'description' => 'Your Google Analytics credentials file.',
            'type'        => 'file',
            'default'     => '',
            'required'    => false,
            'gui'         => true,
            'order'       => 1,
        ],

        /*
        |--------------------------------------------------------------------------
        | API Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'api',
            'group'       => 'General',
            'name'        => 'Personal Access Tokens',
            'handle'      => 'personal_access_tokens',
            'description' => 'Control whether personal access tokens are allowed or not.',
            'type'        => 'select',
            'options'     => [
                'enabled'  => 'Enabled',
                'disabled' => 'Disabled',
            ],
            'default'    => 'disabled',
            'required'   => true,
            'gui'        => true,
            'order'      => 0,
        ],

        /*
        |--------------------------------------------------------------------------
        | System Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'system',
            'name'        => 'Theme',
            'handle'      => 'theme',
            'description' => 'The desired theme for the public frontend.',
            'type'        => 'text',
            'default'     => 'hello',
            'required'    => true,
            'gui'         => false,
            'order'       => 0,
        ],

        [
            'section'  => 'system',
            'group'    => 'General',
            'name'     => 'Website Title',
            'handle'   => 'website_title',
            'type'     => 'text',
            'default'  => 'My FusionCMS Website',
            'required' => true,
            'gui'      => true,
            'order'    => 0,
        ],

        [
            'section'  => 'system',
            'group'    => 'General',
            'name'     => 'Website Slogan',
            'handle'   => 'website_slogan',
            'type'     => 'text',
            'default'  => 'Another awesome website powered by FusionCMS!',
            'required' => true,
            'gui'      => true,
            'order'    => 1,
        ],

        [
            'section'     => 'system',
            'group'       => 'General',
            'name'        => 'Base URL',
            'handle'      => 'site_url',
            'description' => 'The URL of the website for email links and for use around the CMS.',
            'type'        => 'text',
            'default'     => 'http://localhost',
            'required'    => true,
            'gui'         => true,
            'order'       => 2,
        ],

        [
            'section'     => 'system',
            'group'       => 'General',
            'name'        => 'Site Visibility',
            'handle'      => 'site_visibility',
            'description' => 'The Site Visibility setting controls who can view your site, allowing you to make the site private (requiring login) or public.',
            'type'        => 'select',
            'options'     => [
                'public'  => 'Public',
                'private' => 'Private',
            ],
            'default'     => 'public',
            'required'    => true,
            'gui'         => true,
            'order'       => 3,
        ],

        /*
        |--------------------------------------------------------------------------
        | Date & Time Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'date_time',
            'group'       => 'General',
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
            'required'    => true,
            'gui'         => true,
            'order'       => 4,
        ],

        [
            'section'     => 'date_time',
            'group'       => 'General',
            'name'        => 'Time Format',
            'handle'      => 'time_format',
            'description' => 'How should the time be displayed across the website and control panel?',
            'type'        => 'select',
            'options'     => [
                'h:i a' => '01:05 pm',
                'H:i'   => '13:05',
            ],
            'default'     => 'h:i a',
            'required'    => true,
            'gui'         => true,
            'order'       => 5,
        ],

        /*
        |--------------------------------------------------------------------------
        | Update Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'updates',
            'group'       => 'General',
            'name'        => 'Auto Update',
            'handle'      => 'auto_update',
            'description' => 'If enabled, the CMS will check in periodically to determine if there is a new release available for download. If so, the CMS will download and automatically install the update.',
            'type'        => 'select',
            'options'     => [
                'enabled'  => 'Enabled',
                'disabled' => 'Disabled',
            ],
            'default'     => 'enabled',
            'required'    => true,
            'gui'         => true,
            'order'       => 0,
        ],

        /*
        |--------------------------------------------------------------------------
        | Queue Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'queue',
            'group'       => 'General',
            'name'        => 'Queue Driver',
            'handle'      => 'queue_driver',
            'description' => 'Queues allow you to defer the processing of a time consuming task, such as sending an email, until a later time. Sync is useful for debugging, but the preferred option for production environments is "Database"',
            'type'        => 'select',
            'options'     => [
                'database' => 'Database',
                'sync'     => 'Sync',
            ],
            'default'     => 'sync',
            'required'    => true,
            'gui'         => true,
            'order'       => 0,
        ],

        /*
        |--------------------------------------------------------------------------
        | File Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'files',
            'group'       => 'General',
            'name'        => 'Accepted File Types',
            'handle'      => 'accepted_files',
            'description' => 'List of accepted file types. Separate values by a comma.',
            'type'        => 'text',
            'default'     => 'jpg, jpeg, png, gif',
            'required'    => true,
            'gui'         => true,
            'order'       => 0,
        ],

        [
            'section'     => 'files',
            'group'       => 'General',
            'name'        => 'Max Filesize Upload Limit',
            'handle'      => 'file_size_upload_limit',
            'description' => 'The max filesize allowed for uploads in megabytes (mb).',
            'type'        => 'number',
            'options'     => [
                'min'  => 0,
                'max'  => 50,
                'step' => 'any',
            ],
            'default'    => 15,
            'required'   => true,
            'gui'        => true,
            'order'      => 1,
        ],

        /*
        |--------------------------------------------------------------------------
        | Search Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'search',
            'group'       => 'General',
            'name'        => 'Driver',
            'handle'      => 'search_driver',
            'description' => 'Select the desired search driver.',
            'type'        => 'select',
            'options'     => [
                'tntsearch' => 'TNTSearch',
                'algolia'   => 'Algolia',
            ],
            'default'     => 'tntsearch',
            'required'    => true,
            'gui'         => true,
            'order'       => 1,
        ],

        [
            'section'     => 'search',
            'group'       => 'TNTSearch',
            'name'        => 'TNTSearch Fuzziness',
            'handle'      => 'tntsearch_fuzziness',
            'description' => 'Fuzzy search is a process that locates Web pages that are likely to be relevant to a search argument even when the argument does not exactly correspond to the desired information.',
            'type'        => 'select',
            'options'     => [
                'true'  => 'Enabled',
                'false' => 'Disabled',
            ],
            'default'     => 'false',
            'required'    => false,
            'gui'         => true,
            'order'       => 5,
        ],

        [
            'section'     => 'search',
            'group'       => 'TNTSearch',
            'name'        => 'TNTSearch Boolean',
            'handle'      => 'tntsearch_boolean',
            'description' => 'Boolean search is a type of search allowing users to combine keywords with operators (or modifiers) such as AND, NOT and OR to further produce more relevant results. This would limit the search results to only those documents containing the keywords.',
            'type'        => 'select',
            'options'     => [
                'true'  => 'Enabled',
                'false' => 'Disabled',
            ],
            'default'     => 'false',
            'required'    => false,
            'gui'         => true,
            'order'       => 6,
        ],

        [
            'section'     => 'search',
            'group'       => 'Algolia',
            'name'        => 'Algolia App ID',
            'handle'      => 'algolia_app_id',
            'description' => 'This is your unique application identifier. It is used to identify yourself to the Algolia API.',
            'type'        => 'text',
            'default'     => '',
            'required'    => false,
            'gui'         => true,
            'order'       => 7,
        ],

        [
            'section'     => 'search',
            'group'       => 'Algolia',
            'name'        => 'Algolia Secret',
            'handle'      => 'algolia_secret',
            'description' => 'Please keep this secret and use it ONLY from your FusionCMS website => this key is used to create, update and DELETE your search indices.',
            'type'        => 'text',
            'default'     => '',
            'required'    => false,
            'gui'         => true,
            'order'       => 8,
        ],

        /*
        |--------------------------------------------------------------------------
        | License Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'license',
            'group'       => 'General',
            'name'        => 'License Key',
            'handle'      => 'license_key',
            'description' => 'Enter a valid license key to receive support and automatic updates.',
            'type'        => 'text',
            'default'     => '',
            'required'    => false,
            'gui'         => true,
            'order'       => 0,
        ],

        /*
        |--------------------------------------------------------------------------
        | User Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'users',
            'group'       => 'General',
            'name'        => 'Allow Public Registration',
            'handle'      => 'public_registration',
            'description' => 'Control whether or not visitors may register for user accounts.',
            'type'        => 'select',
            'options'     => [
                'enabled'  => 'Enabled',
                'disabled' => 'Disabled',
            ],
            'default'     => 'enabled',
            'required'    => true,
            'gui'         => true,
            'order'       => 0,
        ],

        [
            'section'     => 'users',
            'group'       => 'General',
            'name'        => 'Welcome E-mail',
            'handle'      => 'user_email_welcome',
            'description' => 'Send welcome e-mail when new user finishes registration process.',
            'type'        => 'select',
            'options'     => [
                'enabled'  => 'Enabled',
                'disabled' => 'Disabled',
            ],
            'default'     => 'enabled',
            'required'    => true,
            'gui'         => true,
            'order'       => 2,
        ],

        [
            'section'     => 'users',
            'group'       => 'General',
            'name'        => 'E-mail Verification',
            'handle'      => 'user_email_verification',
            'description' => 'Choose whether e-mail verification is required for new registrations (recommended).',
            'type'        => 'select',
            'options'     => [
                'enabled'  => 'Enabled',
                'disabled' => 'Disabled',
            ],
            'default'     => 'enabled',
            'required'    => true,
            'gui'         => true,
            'order'       => 3,
        ],

        [
            'section'     => 'users',
            'group'       => 'General',
            'name'        => 'Default User Role',
            'handle'      => 'default_user_role',
            'description' => 'Choose default role assigned to new registrants.',
            'type'        => 'select',
            'options'     => [
                'user'  => 'User',
                'guest' => 'Guest',
            ],
            'default'     => 'user',
            'required'    => true,
            'gui'         => true,
            'order'       => 4,
        ],

        /*
        |--------------------------------------------------------------------------
        | Mail Settings
        |--------------------------------------------------------------------------
        */

        [
            'section'     => 'mail',
            'group'       => 'General',
            'name'        => 'Driver',
            'handle'      => 'mail_driver',
            'description' => 'Select the desired e-mail driver.',
            'type'        => 'select',
            'options'     => ['smtp' => 'SMTP', 'sparkpost' => 'SparkPost', 'mailgun' => 'Mailgun', 'mandrill' => 'Mandrill', 'log' => 'Log'],
            'default'     => 'smtp',
            'required'    => true,
            'gui'         => true,
            'order'       => 1,
        ],

        [
            'section'     => 'mail',
            'group'       => 'General',
            'name'        => 'From',
            'handle'      => 'mail_server',
            'description' => 'All e-mails to users will come from this e-mail address.',
            'type'        => 'text',
            'default'     => 'server@example.com',
            'required'    => true,
            'gui'         => true,
            'order'       => 2,
        ],

        [
            'section'     => 'mail',
            'group'       => 'General',
            'name'        => 'From Name',
            'handle'      => 'mail_name',
            'description' => 'E-mail sent out to users will be attributed with this name.',
            'type'        => 'text',
            'default'     => 'Wendell',
            'required'    => true,
            'gui'         => true,
            'order'       => 3,
        ],

        [
            'section'     => 'mail',
            'group'       => 'General',
            'name'        => 'Send Test Email',
            'handle'      => 'mail_test',
            'description' => 'Send a test email using the currently configured mail settings.',
            'type'        => 'partial',
            'options'     => ['view' => 'mail::partials.settings.test_email'],
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 4,
        ],

        [
            'section'     => 'mail',
            'group'       => 'SMTP',
            'name'        => 'Host',
            'handle'      => 'mail_smtp_host',
            'description' => 'The host name of your SMTP server.',
            'type'        => 'text',
            'default'     => 'smtp.example.com',
            'required'    => true,
            'gui'         => true,
            'order'       => 5,
        ],

        [
            'section'     => 'mail',
            'group'       => 'SMTP',
            'name'        => 'Port',
            'handle'      => 'mail_smtp_port',
            'description' => 'The port number of your SMTP server.',
            'type'        => 'text',
            'default'     => '587',
            'required'    => true,
            'gui'         => true,
            'order'       => 6,
        ],

        [
            'section'     => 'mail',
            'group'       => 'SMTP',
            'name'        => 'SMTP Username',
            'handle'      => 'mail_smtp_username',
            'description' => 'The username for your SMTP server.',
            'type'        => 'text',
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 7,
        ],

        [
            'section'     => 'mail',
            'group'       => 'SMTP',
            'name'        => 'SMTP Password',
            'handle'      => 'mail_smtp_password',
            'description' => 'The password for your SMTP server.',
            'type'        => 'text',
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 8,
        ],

        [
            'section'     => 'mail',
            'group'       => 'Sparkpost',
            'name'        => 'Secret',
            'handle'      => 'mail_sparkpost_secret',
            'description' => 'Secret key assigned after setting up your SparkPost account.',
            'type'        => 'text',
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 9,
        ],

        [
            'section'     => 'mail',
            'group'       => 'Mailgun',
            'name'        => 'Domain',
            'handle'      => 'mail_mailgun_domain',
            'description' => 'Domain of your Mailgun account.',
            'type'        => 'text',
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 10,
        ],

        [
            'section'     => 'mail',
            'group'       => 'Mailgun',
            'name'        => 'Secret',
            'handle'      => 'mail_mailgun_secret',
            'description' => 'Secret key assigned after setting up your Mailgun account.',
            'type'        => 'text',
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 11,
        ],

        [
            'section'     => 'mail',
            'group'       => 'Mandrill',
            'name'        => 'Secret',
            'handle'      => 'mail_mandrill_secret',
            'description' => 'Secret key assigned after setting up your Mandrill account.',
            'type'        => 'text',
            'default'     => '',
            'required'    => true,
            'gui'         => true,
            'order'       => 12,
        ],

        [
            'section'     => 'mail',
            'group'       => 'Subjects',
            'name'        => 'User Registered Subject',
            'handle'      => 'mail_subject_user_registered',
            'description' => 'Email subject for user welcome message.',
            'type'        => 'text',
            'default'     => 'Welcome!',
            'required'    => true,
            'gui'         => true,
            'order'       => 0,
        ],

        [
            'section'     => 'mail',
            'group'       => 'Subjects',
            'name'        => 'User Verification Subject',
            'handle'      => 'mail_subject_user_verification',
            'description' => 'Email subject for user verification.',
            'type'        => 'text',
            'default'     => 'Please verify your email',
            'required'    => true,
            'gui'         => true,
            'order'       => 1,
        ],

        [
            'section'     => 'mail',
            'group'       => 'Subjects',
            'name'        => 'Forgot Password Subject',
            'handle'      => 'mail_subject_user_reset_password',
            'description' => 'Email subject for requesting a password reset.',
            'type'        => 'text',
            'default'     => 'Password Reset Request',
            'required'    => true,
            'gui'         => true,
            'order'       => 2,
        ],

    ],

];
