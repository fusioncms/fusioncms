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
    if (! $key) {
        return app('settings');
    }

    return app('settings')->get($key, $default);
}

/**
 * Get the given setting value from the database formatted as a field path.
 *
 * @param  string  $handle
 * @param  mixed  $default
 * @return null|string
 */
function setting_file($handle, $default = null)
{
    if (app_installed()) {
        $setting = app()->make(App\Models\Setting::class)
            ->where(['handle' => $handle])
            ->first();

        if (! empty($setting->value)) {
            return storage_path('settings/' . $setting->value);
        }
    }

    return $default;
}
