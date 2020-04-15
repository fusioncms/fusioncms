<?php

namespace Fusion\Providers;

use Fusion\Models\Fieldset;
use Fusion\Facades\Setting;
use Fusion\Models\SettingSection;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class SettingsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        if (app_installed()) {
            Setting::registerOverrides();
        }
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // Explicit model binding..
        Route::bind('section', function($handle) {
            return SettingSection::where('handle', $handle)->first() ?? abort(404);
        });

        // Settings facade..
        $this->app->bind('setting', function() {
            return new \Fusion\Services\Settings;
        });
    }

    public function provides()
    {
        return [
            'setting'
        ];
    }
}
