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

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use App\Services\Settings\Repository;
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
        collect(config('settings.settings'))
            ->filter(function ($value, $key) {
                return isset($value['override']);
            })->each(function ($setting) {
                $configKey = $setting['override'];
                $envKey    = strtoupper(str_replace('.', '_', $setting['override']));
                $value     = setting($setting['section'] . '.' . $setting['handle']);

                if (\Config::has($configKey) && !empty($value)) {
                    \Config::set($configKey, env($envKey, $value));
                }
            });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        /**
         * Maintain settings.json
         */
        if (! File::exists(settings_path())) {
            $this->createSettingsFile();
        } elseif (File::lastModified(config_path('settings.php')) > File::lastModified(settings_path())) {
            $this->updateSettingsFile();
        }
        
        $this->app->singleton('settings', function ($app) {
            $settings = json_decode(file_get_contents(settings_path()), true);

            return new Repository($settings);
        });
    }

    /**
     * Initialize `settings.json` file.
     * 
     * @return void
     */
    protected function createSettingsFile()
    {
        $settings = collect(config('settings.settings'))
            ->groupBy('section')
            ->map(function ($items) {
                return $items->mapWithKeys(function ($item) {
                    return [$item['handle'] => $item['default'] ?? null];
                });
        })->toArray();

        File::put(settings_path(), json_encode($settings, JSON_PRETTY_PRINT));
    }

    /**
     * Sync existing `settings.json` file with `config/settings.php`
     * 
     * @return void
     */
    protected function updateSettingsFile()
    {
        $existing = json_decode(File::get(settings_path()), true);

        $settings = collect(config('settings.settings'))
            ->groupBy('section')
            ->map(function ($items, $section) use ($existing) {
                return $items->mapWithKeys(function ($item) use ($section, $existing) {
                    if (isset($existing[$section][$item['handle']])) {
                        return [$item['handle'] => $existing[$section][$item['handle']]];
                    } else {
                        return [$item['handle'] => $item['default'] ?? null];
                    }
                });
        })->toArray();

        File::put(settings_path(), json_encode($settings, JSON_PRETTY_PRINT));
    }
}
