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
 * @param null $key
 * @param null $default
 * @return 
 */
function setting($key = null, $default = null)
{
	if (app_installed()) {
		$settings = \Cache::rememberForever('settings', function () {
			return \App\Models\Setting::get()->mapWithKeys(function ($item) {
				$key   = $item->section->handle . '.' . $item->handle;
				$value = ! empty($item->value) ? $item->value :  $item->default;

				return [ $key => $value ];
			});
		});
	} else {
		$settingPath = realpath(base_path('settings'));
		$files       = \Symfony\Component\Finder\Finder::create()->files()->name('*.php')->in($settingPath);
		$settings    = [];

		foreach ($files as $file) {
			$section    = basename($file, '.php');
			$attributes = require $file->getRealPath();

			foreach ($attributes['settings'] as $group => $values) {
				foreach ($values as $setting) {
					$settings[$section . '.' . $setting['handle']] = $setting['value'] ?? $setting['default'] ?? '';
				}
			}
		}
	}

	return !$key ? $settings : $settings[$key] ?? $default;
}