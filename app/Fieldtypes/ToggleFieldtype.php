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

class ToggleFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Toggle';

    /**
     * @var string
     */
    public $icon = 'toggle-on';

    /**
     * @var string
     */
    public $description = 'Field for a simple true or false value.';

    /**
     * @var string
     */
    public $cast = 'boolean';

    /**
     * @var array
     */
    public $settings = [
        'default' => false
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'boolean',
    ];
}
