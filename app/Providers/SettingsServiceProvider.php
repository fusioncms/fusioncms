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
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
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
     * @return [type] [description]
     */
    protected function createSettingsFile()
    {
        $settings = collect(config('settings.settings'))
            ->groupBy('section')
            ->map(function ($items, $section) {
                $settings = [];

                $items->each(function ($item) use (&$settings) {
                    $settings[$item['handle']] = $item['default'] ?? null;
                });

                return $settings;
            })
            ->toArray();

        File::put(settings_path(), json_encode($settings, JSON_PRETTY_PRINT));
    }

    /**
     * Sync existing `settings.json` file with `config/settings.php`
     * 
     * @return void
     */
    protected function updateSettingsFile()
    {
        $existing = json_decode(file_get_contents(settings_path()), true);

        $settings = collect(config('settings.settings'))
            ->groupBy('section')
            ->map(function ($items, $section) use ($existing) {
                $settings = [];

                $items->each(function ($item) use (&$settings, $section, $existing) {
                    if (isset($existing[$section][$item['handle']])) {
                        $settings[$item['handle']] = $existing[$section][$item['handle']];
                    } else {
                        $settings[$item['handle']] = $item['default'] ?? null;
                    }
                });

                return $settings;
            })
            ->toArray();

        File::put(settings_path(), json_encode($settings, JSON_PRETTY_PRINT));
    }
}
