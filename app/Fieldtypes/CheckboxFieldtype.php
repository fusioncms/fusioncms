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

class CheckboxFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Checkbox';

    /**
     * @var string
     */
    public $icon = 'check-square';

    /**
     * @var string
     */
    public $description = 'A set of customizable checkboxes';

    /**
     * @var string
     */
    public $cast = 'array';

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
