<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('themes', 'ThemeController');

Route::get('theme/active', 'ActiveThemeController@show');

Route::put('themes/set-active/{theme}', 'ThemeController@setActive');
Route::get('themes/{theme}/preview.png', 'ThemeController@previewImage');
