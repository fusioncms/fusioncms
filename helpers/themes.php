<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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
        $blade   = app()->make(App\Foundation\Themes\Parsers\Blade::class);
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

if (! function_exists('layout')) {
    /**
     * Fetches the currently configured theme layout.
     *
     * @return string
     */
    function layout()
    {
        return Theme::getLayout();
    }
}

if (! function_exists('theme')) {
    /**
     * Return the currently active theme's URL path.
     *
     * @return string
     */
    function theme($path, $theme = null)
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

        if (! starts_with($path, '/')) {
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

if (! function_exists('theme_property')) {
    /**
     * Fetches the theme property from the manifest file.
     *
     * @param  string  $key
     * @param  mixed  $default
     * @return mixed
     */
    function theme_property($key, $default = '')
    {
        $theme = Theme::where('slug', Theme::getCurrent())->first();

        return $theme->get($key) ?? $default;
    }
}
