<?php


namespace Fusion\Providers;

use Theme;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Theme::set(setting('system.theme'));
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
