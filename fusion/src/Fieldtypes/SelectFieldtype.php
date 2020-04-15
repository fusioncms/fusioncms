<?php

namespace Fusion\Fieldtypes;

class SelectFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Select';

    /**
     * @var string
     */
    public $icon = 'caret-square-down';

    /**
     * @var string
     */
    public $description = 'A list of options to choose from.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'multiple' => 0,
        'options' => []
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
