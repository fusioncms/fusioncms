<?php

namespace Fusion\Fieldtypes;

class RadioFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Radio';

    /**
     * @var string
     */
    public $icon = 'dot-circle';

    /**
     * @var string
     */
    public $description = 'A set of customizable radio buttons';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'display' => 'column'
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
