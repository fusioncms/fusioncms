<?php

namespace Fusion\Fieldtypes;

class CodeFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Code';

    /**
     * @var string
     */
    public $icon = 'code';

    /**
     * @var string
     */
    public $description = 'A code editor with syntax highlighting.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'syntax' => 'text'
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
