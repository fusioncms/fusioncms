<?php

namespace Fusion\Fieldtypes;

class TextareaFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Textarea';

    /**
     * @var string
     */
    public $icon = 'pencil-alt';

    /**
     * @var string
     */
    public $description = 'A multi-line text input field.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'placeholder' => ''
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
