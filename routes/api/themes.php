<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('/themes', 'Themes\BrowseController');
Route::get('/themes/{theme}/screenshot.png', 'Themes\ScreenshotController');

Route::get('/theme', 'Themes\ActiveController@show');
Route::patch('/theme/{theme}', 'Themes\ActiveController@update');
