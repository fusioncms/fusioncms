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

use App\Models\Fieldset;
use App\Models\SettingSection;
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
            \Setting::registerOverrides();
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
            return new \App\Services\Settings;
        });
    }
}
