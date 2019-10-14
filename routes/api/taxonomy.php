<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('/taxonomies', 'TaxonomyController');
Route::get('/taxonomies/slug/{slug}', 'TaxonomyController@slug');

Route::get('/taxonomies/{slug}', 'TermController@index');
Route::get('/taxonomies/{slug}/{id}', 'TermController@show');
Route::get('/taxonomies/{slug}/create', 'TermController@create');
Route::post('/taxonomies/{slug}', 'TermController@store');
Route::patch('/taxonomies/{slug}/{id}', 'TermController@update');
Route::get('/taxonomies/{slug}/{id}/edit', 'TermController@edit');
Route::delete('/taxonomies/{slug}/{id}', 'TermController@destroy');