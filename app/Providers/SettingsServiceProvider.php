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
        /**
         * Merge FusionCMS Settings into System Configurations
         */
        if (app_installed()) {
            collect(config('settings.settings'))
                ->filter(function ($value, $key) {
                    return isset($value['override']);
                })->each(function ($setting) {
                    $configKey = $setting['override'];
                    $envKey    = strtoupper(str_replace('.', '_', $setting['override']));
                    $value     = setting($setting['section'] . '.' . $setting['handle']);

                    if (Config::has($configKey) && !empty($value)) {
                        Config::set($configKey, env($envKey, $value));
                    }
                });
        }

        // Explicit route binding for settings..
        Route::bind('section', function($handle) {
            return \App\Models\SettingSection::where('handle', $handle)->first() ?? abort(404);
        });
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
