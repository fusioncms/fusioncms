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

class SelectFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Select';

    /**
     * @var string
     */
    public $icon = 'caret-square-down';

    /**
     * @var string
     */
    public $description = 'A list of options to choose from.';

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
