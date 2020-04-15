<?php

namespace Fusion\Fieldtypes;

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
