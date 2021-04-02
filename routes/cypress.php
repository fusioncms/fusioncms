<?php

use Illuminate\Support\Facades\Route;

Route::get('/__cypress__/install', 'CypressController@install')->name('cypress.install');
Route::get('/__cypress__/uninstall', 'CypressController@uninstall')->name('cypress.uninstall');
Route::get('/__cypress__/create-user', 'CypressController@newUser')->name('cypress.create-user');

Route::post('/__cypress__/factory', 'CypressController@factory')->name('cypress.factory');
Route::post('/__cypress__/login', 'CypressController@login')->name('cypress.login');
Route::post('/__cypress__/logout', 'CypressController@logout')->name('cypress.logout');
Route::post('/__cypress__/artisan', 'CypressController@artisan')->name('cypress.artisan');
Route::post('/__cypress__/run-php', 'CypressController@runPhp')->name('cypress.run-php');
Route::get('/__cypress__/csrf_token', 'CypressController@csrfToken')->name('cypress.csrf-token');
Route::post('/__cypress__/routes', 'CypressController@routes')->name('cypress.routes');
