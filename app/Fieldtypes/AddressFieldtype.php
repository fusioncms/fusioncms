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

class AddressFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Address';

    /**
     * @var string
     */
    public $icon = 'map-marked-alt';

    /**
     * @var string
     */
    public $description = 'A group of fields to input an address with Google Maps integration';

    /**
     * @var string
     */
    public $cast = 'collection';

    /**
     * @var array
     */
    public $settings = [];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
