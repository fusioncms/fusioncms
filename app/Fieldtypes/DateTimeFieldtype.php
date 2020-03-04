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

class DateTimeFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Date/Time';

    /**
     * @var string
     */
    public $icon = 'calendar-alt';

    /**
     * @var string
     */
    public $description = 'Select a date with an optional time.';

    /**
     * @var string
     */
    public $cast = 'dateTime';

    /**
     * @var array
     */
    public $settings = [
        'format' => 'Y-m-d',
        'time' => false
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.format' => 'required'
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.format' => 'format'
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'dateTime',
    ];
}
