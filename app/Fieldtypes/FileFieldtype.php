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

class FileFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'File';

    /**
     * @var string
     */
    public $icon = 'file-alt';

    /**
     * @var string
     */
    public $description = 'FIELDTYPE IN DEVELOPMENT';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
