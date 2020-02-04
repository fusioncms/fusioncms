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
    'name'        => 'Files',
    'group'       => 'General',
    'icon'        => 'images',
    'description' => 'Configure accepted filetypes and max upload size.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Accepted File Types',
                'handle'      => 'accepted_files',
                'description' => 'List of accepted file types. Separate values by a comma.',
                'default'     => 'jpg, jpeg, png, gif',
            ],
            [
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
            ],
        ],
    ],
];