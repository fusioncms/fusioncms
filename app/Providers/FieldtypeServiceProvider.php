<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class FieldtypeServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        // fieldtypes()->register(\App\Fieldtypes\CheckboxFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\DividerFieldtype::class);
        // fieldtypes()->register(\App\Fieldtypes\FileFieldtype::class);
        // fieldtypes()->register(\App\Fieldtypes\ImageFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\InformationFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\InputFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\NumberFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\RedactorFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\SelectFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\TextareaFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\ColorPickerFieldtype::class);
        fieldtypes()->register(\App\Fieldtypes\CodeFieldtype::class);
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(\App\Fieldtypes\Registry::class);
    }
}
