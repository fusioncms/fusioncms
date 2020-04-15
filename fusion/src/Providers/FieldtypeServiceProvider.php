<?php

namespace Fusion\Providers;

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
        foreach (config('fusion.fieldtypes') as $fieldtype) {
            fieldtypes()->register($fieldtype);
        }
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(\Fusion\Fieldtypes\Registry::class);
    }
}
