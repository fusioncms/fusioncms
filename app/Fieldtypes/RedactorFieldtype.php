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

class RedactorFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Redactor';

    /**
     * @var string
     */
    public $icon = 'h1';

    /**
     * @var string
     */
    public $description = 'An easy to use "what you see is what you get" (WYSIWYG) field.';

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
