<?php

namespace Fusion\Fieldtypes;

class EditorFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Block Editor';

    /**
     * @var string
     */
    public $icon = 'plus-square';

    /**
     * @var string
     */
    public $description = 'A next generation block style editor.';

    /**
     * @var string
     */
    public $cast = 'array';

    /**
     * @var array
     */
    public $settings = [
        //
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
