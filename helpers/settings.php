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
 * Determine if Settings have been officially loaded.
 * 
 * @return bool
 */
function setting_installed()
{
	return app_installed() and Schema::hasTable('settings');
}

/**
 * Get/set FusionCMS system settings.
 *
 * @param mixed $key
 * @param mixed $default
 * @return 
 */
function setting($key = null, $default = null)
{
	if (! setting_installed()) {
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

		return Illuminate\Support\Arr::get($settings, $key, $default);
	}

	// -----

	if (is_array($key)) {
		return App\Services\Settings::set($key);
	} else {
		return App\Services\Settings::get($key, $default);
	}
}