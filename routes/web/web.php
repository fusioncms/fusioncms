<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::pattern('id', '[0-9]+');
Route::pattern('slug', '[a-z0-9-]+');
Route::pattern('username', '[a-z0-9_-]{3,16}');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => config('fusioncms.path')], function () {
    Route::get('/tinker', [
        'as'   => 'admin.tinker',
        'uses' => 'Admin\TinkerController@index',
    ]);

    Route::post('/login', [
        'as'   => 'admin.post.login',
        'uses' => 'Admin\LoginController@authenticate',
    ]);

    Route::get('/{any?}', [
        'as'   => 'admin',
        'uses' => 'AdminController@index',
    ])->where('any', '.*');
});

Route::fallback([
    'as'   => 'routes.handle',
    'uses' => 'RouterController@handle',
])->where('fallbackPlaceholder', '^(?!api).*$');
