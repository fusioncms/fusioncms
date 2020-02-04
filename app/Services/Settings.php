<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services;

use Exception;
use InvalidArgumentException;
use App\Models\Setting;
use App\Models\SettingSection;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

abstract class Settings
{
	public static function all()
	{
		return Cache::rememberForever('settings', function () {
			dump('busted');
			return SettingSection::all()->mapWithKeys(function($section) {
				$settings = $section->settings->mapWithKeys(function ($setting) {
					return [ $setting->handle => $setting->value ?? $setting->default ];
				});

				return [ $section->handle => $settings ];
			});
		});
	}

	/**
     * Determine if the given FusionCMS setting value exists.
     *
     * @param  string  $key
     * @return bool
     */
    public static function has($key)
    {
        return Arr::has(static::all(), $key);
    }

	/**
	 * Get FusionCMS setting.
	 * 
	 * Usage:
	 * ----------
	 * Settings::get()
	 * Settings::get('mail')
	 * Settings::get('mail.mail_driver', 'smtp')
	 *
	 * @param  string|null $key
	 * @param  string|null $default
	 * @return mixed
	 **/
	public static function get($key = null, $default = null)
	{
		if (is_null($key)) {
			return static::all();
		} elseif (is_array($key)) {
            return static::getMany($key);
        }

		return Arr::get(static::all(), $key, $default);
	}

	/**
     * Get many configuration values.
     *
     * @param  array  $keys
     * @return array
     */
	public static function getMany($keys)
	{
		$config = [];

		foreach ($keys as $key => $default) {
			if (is_numeric($key)) {
			    [$key, $default] = [$default, null];
			}

			$config[$key] = Arr::get(static::all(), $key, $default);
		}

		return $config;
	}

	/**
	 * Set a given FusionCMS setting value.
	 *
	 * @param  array|string  $key
     * @param  mixed         $value
     * @return void
	 **/
	public static function set($key, $value = null)
	{
		$keys = is_array($key) ? $key : [$key => $value];

		foreach ($keys as $key => $value) {
			try {
				@list($section, $handle) = explode('.', $key);

				Setting::whereHas('section', function($query) use ($section) {
					$query->where('handle', $section);
				})
				->where('handle', $handle)
				->firstOrFail()
				->update(['value' => $value]);
			} catch (Exception $exception) {
				throw new InvalidArgumentException($exception->getMessage());
			}
		}

		Cache::forget('settings');
	}

	/**
     * Override existing configurations
     * with FusionCMS System Settings.

     * @return void
     */
	public static function registerOverrides()
	{
	    Setting::where('override', '<>', '')->each(function ($setting) {
	    	$envKey = strtoupper(str_replace('.', '_', $setting->override));
			
			if (Config::has($setting->override) && !empty($setting->value)) {
				Config::set($setting->override, env($envKey, $setting->value));
			}
		});
	}
}