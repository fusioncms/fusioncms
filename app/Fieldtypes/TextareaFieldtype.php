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

class TextareaFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Textarea';

    /**
     * @var string
     */
    public $icon = 'pencil';

    /**
     * @var string
     */
    public $description = 'A multi-line text input field.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'placeholder' => ''
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
