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
 * @return \App\Services\Settings\Repository|mixed
 */
function setting($key = null, $default = null)
{
	if (app_installed()) {
		$settings = \App\Models\Setting::with('section:id,handle')
			->get()
			->mapWithKeys(function($item) {
			    $key   = $item->section->handle . '.' . $item->handle;
			    $value = ! empty($item->value) ? $item->value :  $item->default;

			    return [ $key => $value ];
			});
	} else {
		// App hasn't been installed yet..
		// Use flat file instead
		$settings = collect(config('settings.settings'))
            ->groupBy('section')
            ->map(function ($items) {
                return $items->mapWithKeys(function ($item) {
                    return [$item['handle'] => $item['default'] ?? null];
                });
        })->toArray();
        
        $settings = \Illuminate\Support\Arr::dot($settings);
	}

    return !$key ? $settings : $settings[$key] ?? $default;
}
