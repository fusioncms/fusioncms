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

class ColorPickerFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Color Picker';

    /**
     * @var string
     */
    public $icon = 'palette';

    /**
     * @var string
     */
    public $description = 'Choose a color with a handy plugin.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'transparency' => 1,
        'default' => ''
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
