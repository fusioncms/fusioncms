<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Fieldtypes;

class AssetFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Asset';

    /**
     * @var string
     */
    public $icon = 'folder-open';

    /**
     * @var string
     */
    public $description = 'A set of assets';

    /**
     * @var string
     */
    public $cast = 'collection';

    /**
     * @var array
     */
    public $settings = [
        'limit'                 => null,
        'root_directory'        => [],
        'filetype_restrictions' => [],
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
