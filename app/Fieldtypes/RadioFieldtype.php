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

class RadioFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Radio';

    /**
     * @var string
     */
    public $icon = 'dot-circle';

    /**
     * @var string
     */
    public $description = 'A set of customizable radio buttons';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'display' => 'column'
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
