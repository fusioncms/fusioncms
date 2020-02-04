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
    'name'        => 'Google reCAPTCHA',
    'group'       => 'Services',
    'icon'        => 'shield-alt',
    'description' => 'Configure your Google reCAPTCHA settings.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Site Key',
                'handle'      => 'recaptcha_site_key',
                'description' => 'Your Google reCAPTCHA site key.',
            ],
            [
                'name'        => 'Secret Key',
                'handle'      => 'recaptcha_secret_key',
                'description' => 'Your Google reCAPTCHA secret key.',
            ],
        ],
    ],
];