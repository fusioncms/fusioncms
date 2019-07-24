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

class CodeFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Code';

    /**
     * @var string
     */
    public $icon = 'code';

    /**
     * @var string
     */
    public $description = 'A code editor with syntax highlighting.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'syntax' => 'Text'
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
