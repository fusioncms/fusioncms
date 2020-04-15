<?php

namespace Fusion\Fieldtypes;

class ColorPickerFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Color Picker';

    /**
     * @var string
     */
    public $icon = 'palette';

    public $exclude = [
        'forms',
    ];

    /**
     * @var string
     */
    public $description = 'Choose a color with a handy plugin.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'transparency' => 1,
        'default' => ''
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
