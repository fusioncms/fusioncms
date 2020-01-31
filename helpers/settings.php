<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Get a settings value.
 *
 * @param mixed $key
 * @param mixed $default
 * @return 
 */
function setting($key = null, $default = null)
{
	if (Schema::hasTable('settings')) {
		if (is_array($key)) {
			// Set
			foreach ($key as $moniker => $value) {
				App\Models\Setting::withMoniker($moniker)->first()->update(['value' => $value]);
			}

			Cache::forget('settings');
            return;
        } else {
        	// Get
        	$settings = Cache::rememberForever('settings', function () {
	        	return App\Models\SettingSection::all()->mapWithKeys(function($section) {
					$settings = $section->settings->mapWithKeys(function ($setting) {
						return [ $setting->handle => $setting->value ?? $setting->default ];
					});

					return [ $section->handle => $settings ];
				});
	        });
		}
	} else {
		$settingPath = realpath(base_path('settings'));
		$files       = Symfony\Component\Finder\Finder::create()->files()->name('*.php')->in($settingPath);
		$settings    = [];

		foreach ($files as $file) {
			$section            = basename($file, '.php');
			$attributes         = require $file->getRealPath();
			$settings[$section] = [];

			foreach ($attributes['settings'] as $group => $values) {
				foreach ($values as $setting) {
					$settings[$section][$setting['handle']] = $setting['value'] ?? $setting['default'] ?? '';
				}
			}
		}
	}

	return Illuminate\Support\Arr::get($settings, $key, $default);
}