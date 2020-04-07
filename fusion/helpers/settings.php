<?php

/**
 * Get/set FusionCMS system settings.
 *
 * @param mixed $key
 * @param mixed $default
 * @return
 */
function setting($key = null, $default = null)
{
	if (! app_installed()) {
		$settingPath = __DIR__.'/../settings';
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

	if (is_array($key)) {
		return Setting::set($key);
	} else {
		return Setting::get($key, $default);
	}
}