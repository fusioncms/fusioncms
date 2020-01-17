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

class EditorFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Block Editor';

    /**
     * @var string
     */
    public $icon = 'plus-square';

    /**
     * @var string
     */
    public $description = 'A next generation block style editor.';

    /**
     * @var string
     */
    public $cast = 'array';

    /**
     * @var array
     */
    public $settings = [
        // 
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
