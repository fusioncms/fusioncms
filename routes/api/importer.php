<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('/imports', 'ImportController');

Route::get('/imports/mapping/{import}', 'ImportMappingController@show');
Route::patch('/imports/mapping/{import}', 'ImportMappingController@update');