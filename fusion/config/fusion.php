<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Admin Control Panel Path
    |--------------------------------------------------------------------------
    |
    | Most CMS' come with a hard-coded path to the bundled admin control
    | panel. This could lead to unethical end users being able to easily
    | identify what your website is running. We let you change this!
    |
    */

    'path' => 'admin',

    /*
    |--------------------------------------------------------------------------
    | Authentication provider
    |--------------------------------------------------------------------------
    |
    */

    'authenticate' => [

        'middleware' => App\Http\Middleware\Authenticate::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Polymorphic Types
    |--------------------------------------------------------------------------
    |
    | By default, Laravel will use the fully qualified class name to store
    | the type of the related model. Here, you may define a "morph map"
    | to instruct Eloquent to use a custom name for each model.
    |
    */

    'relationships' => [
        // 'matrix' => 'Fusion\Models\Matrix',
        // 'type'   => 'Fusion\Models\Type',
    ],

    'fieldtypes' => [

        \Fusion\Fieldtypes\AssetFieldtype::class,
        \Fusion\Fieldtypes\AddressFieldtype::class,
        \Fusion\Fieldtypes\CheckboxFieldtype::class,
        \Fusion\Fieldtypes\CodeFieldtype::class,
        \Fusion\Fieldtypes\ColorPickerFieldtype::class,
        \Fusion\Fieldtypes\CountryFieldtype::class,
        \Fusion\Fieldtypes\DateTimeFieldtype::class,
        \Fusion\Fieldtypes\DividerFieldtype::class,
        \Fusion\Fieldtypes\InformationFieldtype::class,
        \Fusion\Fieldtypes\InputFieldtype::class,
        \Fusion\Fieldtypes\LinkFieldtype::class,
        \Fusion\Fieldtypes\MarkdownFieldtype::class,
        \Fusion\Fieldtypes\NumberFieldtype::class,
        \Fusion\Fieldtypes\RadioFieldtype::class,
        \Fusion\Fieldtypes\RedactorFieldtype::class,
        \Fusion\Fieldtypes\SelectFieldtype::class,
        \Fusion\Fieldtypes\TaxonomyFieldtype::class,
        \Fusion\Fieldtypes\TextareaFieldtype::class,
        \Fusion\Fieldtypes\ToggleFieldtype::class,
        \Fusion\Fieldtypes\USStateFieldtype::class,
        \Fusion\Fieldtypes\UserFieldtype::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Content Structures
    |--------------------------------------------------------------------------
    |
    */
    'structures' => [

        'forms'  => 'Forms',
        'matrix' => 'Matrix',
        'menus'  => 'Menus',
        'users'  => 'Users',

    ],

];
