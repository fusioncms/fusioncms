<?php

namespace Fusion\Fieldtypes;

class RedactorFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Redactor';

    /**
     * @var string
     */
    public $icon = 'text-height';

    /**
     * @var string
     */
    public $description = 'An easy to use "what you see is what you get" (WYSIWYG) field.';

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
