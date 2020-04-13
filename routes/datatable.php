<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 /*
|--------------------------------------------------------------------------
| DataTable Routes
|--------------------------------------------------------------------------
|
| Here is where you can register datatable routes for your application.
| These routes are loaded by the RouteServiceProvider within a group
| which is assigned the "api" middleware group. Enjoy building!
|
*/

Route::get('/users', 'UserController@index');
Route::get('/users/{role}', 'UserController@index');
Route::get('/roles', 'RoleController@index');
Route::get('/permissions', 'PermissionController@index');
Route::get('/fieldsets', 'FieldsetController@index');
Route::get('/imports', 'ImportController@index');
Route::get('/taxonomies', 'TaxonomyController@index');
Route::get('/mailables', 'MailableController@index');
Route::get('/forms', 'FormController@index');
Route::get('/menus', 'MenuController@index');
Route::get('/taxonomies/{taxonomy}', 'TermController@index');
Route::get('/matrices', 'MatrixController@index');
Route::get('/matrices/{matrix}/fields', 'MatrixFieldController@index');
Route::get('/collections/{collection}', 'CollectionController@index');
Route::get('/extensions', 'ExtensionController@index');
