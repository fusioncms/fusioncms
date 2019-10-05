<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('/taxonomies', 'TaxonomyGroupsController');
Route::get('/taxonomies/slug/{slug}', 'TaxonomyGroupsController@slug');

Route::get('/taxonomy/{slug}', 'TaxonomyController@index');
Route::get('/taxonomy/{slug}/{id}', 'TaxonomyController@show');
Route::get('/taxonomy/{slug}/create', 'TaxonomyController@create');
Route::post('/taxonomy/{slug}', 'TaxonomyController@store');
Route::patch('/taxonomy/{slug}/{id}', 'TaxonomyController@update');
Route::get('/taxonomy/{slug}/{id}/edit', 'TaxonomyController@edit');
Route::delete('/taxonomy/{slug}/{id}', 'TaxonomyController@destroy');