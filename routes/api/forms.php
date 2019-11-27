<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('/forms', 'FormController');

Route::get('/forms/{slug?}/responses', 'ResponseController@index');
Route::apiResource('/forms/{slug}/responses', 'ResponseController');