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
use App\Foundation\Settings\Repository;
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
        if (! file_exists(settings_path())) {
            $this->initializeSettingsFile();
        }

        $this->app->singleton('settings', function ($app) {
            $settings = json_decode(file_get_contents(settings_path()), true);

            return new Repository($settings);
        });
    }

    protected function initializeSettingsFile()
    {
        $settings = collect(config('settings.settings'))
            ->groupBy('section')
            ->map(function ($items, $section) {
                $settings = [];

                $items->each(function ($item) use (&$settings) {
                    $settings[$item['handle']] = $item['default'];
                });

                return $settings;
            })
            ->toArray();

        File::put(settings_path(), json_encode($settings, JSON_PRETTY_PRINT));
    }
}
