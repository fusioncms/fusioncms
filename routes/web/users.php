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
    'confirm'  => true
]);

Route::get('logout', 'Auth\LoginController@logout');

Route::group(['prefix' => 'account', 'middleware' => ['auth', 'verified']], function () {
    Route::get('/', 'Account\SettingController@index');

    Route::get('settings', 'Account\SettingController@edit');
    Route::post('settings', 'Account\SettingController@update');

    Route::group(['prefix' => 'security', 'middleware' => ['password.confirm']], function () {
    	Route::get('', 'Account\SecurityController@edit');
    	Route::post('', 'Account\SecurityController@update');
    });
    
    Route::get('api', 'Account\APIController@edit');
});
