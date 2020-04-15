<?php

namespace Fusion\Fieldtypes;

class InputFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Input';

    /**
     * @var string
     */
    public $icon = 'i-cursor';

    /**
     * @var string
     */
    public $description = 'Simple text input field.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'type' => 'text',
        'placeholder' => ''
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
