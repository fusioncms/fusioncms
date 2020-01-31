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

use App\Models\Setting;
use App\Models\SettingSection;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Config;
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
        Route::bind('section', function($handle) {
            return SettingSection::where('handle', $handle)->first() ?? abort(404);
        });

        $this->overrideConfigurations();
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

    /**
     * Override existing configurations
     * with FusionCMS System Settings.
     *
     * *Requires `app_installed` = true
     * 
     * @return void
     */
    protected function overrideConfigurations()
    {
        if (app_installed()) {
            Setting::whereNotNull('override')
                ->each(function ($setting) {
                    $envKey = strtoupper(str_replace('.', '_', $setting->override));

                    if (Config::has($setting->override) && !empty($setting->value)) {
                        Config::set($setting->override, env($envKey, $setting->value));
                    }
                });
        }
    }
}
