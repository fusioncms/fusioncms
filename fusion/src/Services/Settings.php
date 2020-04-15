<?php

namespace Fusion\Services;

use Exception;
use InvalidArgumentException;
use Fusion\Models\Setting;
use Fusion\Models\SettingSection;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class Settings
{
	/**
     * Get/set all FusionCMS settings.
     *
     * @return array
     */
	public function all()
	{
		return Cache::rememberForever('settings', function () {
			return SettingSection::all()->mapWithKeys(function($section) {
				$settings = $section->settings->mapWithKeys(function ($setting) {
					return [ $setting->handle => $setting->value ?? $setting->default ];
				});

				return [ $section->handle => $settings ];
			})->toArray();
		});
	}

	/**
     * Determine if the given FusionCMS setting value exists.
     *
     * @param  string  $key
     * @return bool
     */
    public function has($key)
    {
        return Arr::has($this->all(), $key);
    }

	/**
	 * Get FusionCMS setting value(s).
	 *
	 * @param  string|null $key
	 * @param  string|null $default
	 * @return mixed
	 **/
	public function get($key = null, $default = null)
	{
		if (is_null($key)) {
			return static::all();
		} elseif (is_array($key)) {
            return static::getMany($key);
        }

		return Arr::get($this->all(), $key, $default);
	}

	/**
     * Get many FusionCMS setting values.
     *
     * @param  array  $keys
     * @return array
     */
	public function getMany($keys)
	{
		$settings = [];

		foreach ($keys as $key => $default) {
			if (is_numeric($key)) {
			    [$key, $default] = [$default, null];
			}

			$settings[$key] = Arr::get($this->all(), $key, $default);
		}

		return $settings;
	}

	/**
	 * Set a given FusionCMS setting value.
	 *
	 * @param  array|string  $key
     * @param  mixed         $value
     * @return void
	 **/
	public function set($key, $value = null)
	{
		$keys = is_array($key) ? $key : [$key => $value];

		foreach ($keys as $key => $value) {
			list($section, $handle) = $this->getSettingHandle($key);

			try {
				$setting = Setting::whereHas('section', function($query) use ($section) {
					$query->where('handle', $section);
				})
				->where('handle', $handle)
				->firstOrFail()
				->update(['value' => $value]);
			} catch (Exception $exception) {
				throw new Exception($exception->getMessage());
			}
		}

		// rewrite any updated overrides..
		$this->registerOverrides();

		// bust cache..
		Cache::forget('settings');

	}

	/**
     * Override existing configurations
     * with FusionCMS System s.

     * @return void
     */
	public function registerOverrides()
	{
	    Setting::where('override', '<>', '')->each(function ($setting) {
	    	$envKey = strtoupper(str_replace('.', '_', $setting->override));

			if (Config::has($setting->override) && ! empty($setting->value)) {
				Config::set($setting->override, env($envKey, $setting->value));
			}
		});
	}

	/**
	 * Helper method to fetch Setting section and handle.
	 *
	 * @param  string $key
	 * @return array
	 */
	private function getSettingHandle($key)
	{
		try {
			list($section, $handle) = explode('.', $key);
		} catch (Exception $exception) {
			throw new InvalidArgumentException('Full setting path required (e.g. `system.website_title`).');
		}

		return [ $section, $handle ];
	}
}