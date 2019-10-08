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

Route::get('/taxonomies/{slug}', 'TaxonomyController@index');
Route::get('/taxonomies/{slug}/{id}', 'TaxonomyController@show');
Route::get('/taxonomies/{slug}/create', 'TaxonomyController@create');
Route::post('/taxonomies/{slug}', 'TaxonomyController@store');
Route::patch('/taxonomies/{slug}/{id}', 'TaxonomyController@update');
Route::get('/taxonomies/{slug}/{id}/edit', 'TaxonomyController@edit');
Route::delete('/taxonomies/{slug}/{id}', 'TaxonomyController@destroy');