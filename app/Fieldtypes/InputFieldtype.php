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

class InputFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Input';

    /**
     * @var string
     */
    public $icon = 'i-cursor';

    /**
     * @var string
     */
    public $description = 'Simple text input field.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'type' => 'text',
        'placeholder' => ''
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
