<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Auth::routes([
    'verify'   => setting('users.user_email_verification') === 'enabled',
    'register' => setting('users.public_registration') === 'enabled',
]);

Route::get('logout', 'Auth\LoginController@logout');

Route::group(['prefix' => 'settings', 'middleware' => ['auth', 'verified']], function () {
    Route::get('/', 'Settings\AccountController@index');

    Route::get('account', 'Settings\AccountController@edit');
    Route::post('account', 'Settings\AccountController@update');

    Route::get('security', 'Settings\SecurityController@edit');
    Route::post('security', 'Settings\SecurityController@update');
});
