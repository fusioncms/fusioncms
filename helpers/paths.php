<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

if (! function_exists('settings_path')) {
    /**
     * Get the path to the settings file.
     *
     * @return string
     */
    function settings_path()
    {
        return storage_path('settings.json');
    }
}
