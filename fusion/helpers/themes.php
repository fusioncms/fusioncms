<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

if (! function_exists('blade')) {
    /**
     * Compile blade syntax.
     *
     * @param  string  $content
     * @param  array  $data
     * @return string
     */
    function blade($content, array $data = [])
    {
        $blade   = app()->make(Fusion\Services\Themes\Parsers\Blade::class);
        $content = $blade->html($content)
            ->data($data)
            ->render();

        return $content;
    }
}

if (! function_exists('javascript')) {
    /**
     * Transform PHP variables to JavaScript.
     *
     * @param  array  $data
     * @return string
     */
    function javascript($data)
    {
        return Javascript::put($data);
    }
}

if (! function_exists('theme_path')) {
    /**
     * Return the currently active theme's URL path.
     *
     * @return string
     */
    function theme_path($path, $theme = null)
    {
        if (is_null($theme)) {
            $theme = Theme::getCurrent();
        }

        return url(
            Config::get('themes.paths.base') . '/' .
            $theme . '/' .
            $path
        );
    }
}

if (! function_exists('theme_mix')) {
    /**
     * Laravel Mix helper for themes.
     *
     * @param  string  $path
     * @param  string  $manifest
     * @return string
     */
    function theme_mix($path)
    {
        $theme        = Theme::getCurrent();
        $manifestPath = public_path("themes/$theme/mix-manifest.json");

        if (! file_exists($manifestPath)) {
            throw new Exception(
                'The Laravel Mix manifest file does not exist within your theme. ' .
                'Please run "npm run watch" and try again.'
            );
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);

        if (! Str::startsWith($path, '/')) {
            $path = "/$path";
        }

        if (! array_key_exists($path, $manifest)) {
            throw new Exception(
                "Unknown Laravel Mix file path: $path. Please check your requested " .
                'theme webpack.mix.js output path, and try again.'
            );
        }

        $assetPath = $manifest[$path];

        return "/themes/$theme/$assetPath";
    }
}

if (! function_exists('theme')) {
    /**
     * Fetches the theme property from the manifest file.
     *
     * @param  string  $key
     * @param  mixed  $default
     * @return mixed
     */
    function theme($key, $default = '')
    {
        $theme = Theme::where('slug', Theme::getCurrent())->first();

        if (request()->has('preview')) {
            $theme->put('setting', json_decode(request()->get('preview'), true));
        } else {
            $settingsFilePath = storage_path('themes/'.$theme->get('slug').'.json');

            if (! \File::exists($settingsFilePath)) {
                $defaults = collect($theme->get('settings'))->mapWithKeys(function($setting, $handle) {
                    return [$handle => $setting['default'] ?? null];
                });

                \File::put($settingsFilePath, json_encode($defaults, JSON_PRETTY_PRINT));
            }

            $theme->put('setting', json_decode(\File::get($settingsFilePath), true));
        }

        $theme = $theme->mapWithKeys(function($value, $handle) {
            return Arr::dot([$handle => $value]);
        });

        return $theme->get($key, $default);
    }
}
