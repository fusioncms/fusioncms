<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('/pages', 'PageController');
Route::get('/pages/{slug}', 'PageController@show');

Route::apiResource('/matrices', 'MatrixController');
Route::get('/matrices/slug/{slug}', 'MatrixController@slug');

Route::get('/collections/{slug}', 'CollectionController@index');
Route::get('/collections/{slug}/{id}', 'CollectionController@show');
Route::get('/collections/{slug}/create', 'CollectionController@create');
Route::post('/collections/{slug}', 'CollectionController@store');
Route::patch('/collections/{slug}/{id}', 'CollectionController@update');
Route::get('/collections/{slug}/{id}/edit', 'CollectionController@edit');
Route::delete('/collections/{slug}/{id}', 'CollectionController@destroy');