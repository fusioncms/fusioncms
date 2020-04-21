<?php

namespace Modules\MockModule\Providers;

use Caffeinated\Modules\Support\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(module_path('mock-module', 'database/migrations', 'modules'));
        $this->loadFactoriesFrom(module_path('mock-module', 'database/factories', 'modules'));
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }
}
