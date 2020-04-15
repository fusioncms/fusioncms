<?php

namespace Fusion\Fieldtypes;

class NumberFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Number';

    /**
     * @var string
     */
    public $icon = 'sort-numeric-down';

    /**
     * @var string
     */
    public $description = 'Simple number input field.';

    /**
     * @var string
     */
    public $cast = 'float';

    /**
     * @var array
     */
    public $settings = [
        'decimals' => 0,
        'steps'    => 1,
        'min'      => null,
        'max'      => null
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.decimals' => 'required|integer',
        'settings.steps'    => 'required|numeric',
        'settings.min'      => 'nullable|numeric',
        'settings.max'      => 'nullable|numeric',
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.decimals' => 'decimals',
        'settings.steps'    => 'steps',
        'settings.min'      => 'min',
        'settings.max'      => 'max',
    ];

    /**
     * @var array
     */
    public $column = [
        'type'    => 'float',
        'settings' => [24, 12],
    ];
}
