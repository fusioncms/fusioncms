<?php

namespace Fusion\Fieldtypes;

class ToggleFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Toggle';

    /**
     * @var string
     */
    public $icon = 'toggle-on';

    /**
     * @var string
     */
    public $description = 'Field for a simple true or false value.';

    /**
     * @var string
     */
    public $cast = 'boolean';

    /**
     * @var array
     */
    public $settings = [
        'default' => false
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'boolean',
    ];
}
