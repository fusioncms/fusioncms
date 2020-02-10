<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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
    | Custom Polymorphic Types
    |--------------------------------------------------------------------------
    |
    | By default, Laravel will use the fully qualified class name to store
    | the type of the related model. Here, you may define a "morph map"
    | to instruct Eloquent to use a custom name for each model.
    |
    */

    'relationships' => [
        // 'matrix' => 'App\Models\Matrix',
        // 'type'   => 'App\Models\Type',
    ],

    'fieldtypes' => [

        \App\Fieldtypes\AddressFieldtype::class,
        \App\Fieldtypes\ButtonFieldtype::class,
        \App\Fieldtypes\CheckboxFieldtype::class,
        \App\Fieldtypes\CodeFieldtype::class,
        \App\Fieldtypes\ColorPickerFieldtype::class,
        \App\Fieldtypes\CountryFieldtype::class,
        \App\Fieldtypes\DateTimeFieldtype::class,
        \App\Fieldtypes\DividerFieldtype::class,
        \App\Fieldtypes\EditorFieldtype::class,
        \App\Fieldtypes\InformationFieldtype::class,
        \App\Fieldtypes\InputFieldtype::class,
        \App\Fieldtypes\MarkdownFieldtype::class,
        \App\Fieldtypes\NumberFieldtype::class,
        \App\Fieldtypes\RadioFieldtype::class,
        \App\Fieldtypes\RedactorFieldtype::class,
        \App\Fieldtypes\SelectFieldtype::class,
        \App\Fieldtypes\TaxonomyFieldtype::class,
        \App\Fieldtypes\TextareaFieldtype::class,
        \App\Fieldtypes\ToggleFieldtype::class,
        \App\Fieldtypes\USStateFieldtype::class,

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
