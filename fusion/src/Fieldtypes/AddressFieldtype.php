<?php

namespace Fusion\Fieldtypes;

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
    public $settings = [
        'api_key' => ''
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
