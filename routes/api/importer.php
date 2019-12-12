<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::get('/imports/mapping/{import}', 'ImportMappingController@show');
Route::patch('/imports/mapping/{import}', 'ImportMappingController@update');

Route::get('/imports/queue', 'ImportQueueController@index');
Route::post('/imports/queue/{import}', 'ImportQueueController@store');

Route::get('/imports/logs/{importLog}', 'ImportLogController@index');

Route::apiResource('/imports', 'ImportController');
Route::post('/tmpfile', 'UploadTempFile@index');
