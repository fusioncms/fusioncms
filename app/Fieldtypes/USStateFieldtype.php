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

class USStateFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'US State';

    /**
     * @var string
     */
    public $icon = 'flag-usa';

    /**
     * @var string
     */
    public $description = 'Field to select one or more US states.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'multiple' => 0
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
