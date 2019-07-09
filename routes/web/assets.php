<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::group(['middleware' => 'asset.protected'], function () {
    Route::get('asset/{slug}', [
        'as'   => 'assets.asset',
        'uses' => 'AssetController@show',
    ]);

    Route::get('asset/preview/{slug}', [
        'as'   => 'assets.preview',
        'uses' => 'AssetController@preview',
    ]);

    Route::get('download/{slug}', [
        'as'         => 'assets.download',
        'uses'       => 'AssetController@download',
        'middleware' => ['can:assets.download'],
    ]);
});

Route::group(['prefix' => 'cp', 'middleware' => ['auth', 'module:assets']], function () {
    Route::group(['prefix' => 'assets'], function () {
        Route::get('', [
            'as'         => 'admin.assets',
            'uses'       => 'Admin\AssetController@index',
            'middleware' => ['can:assets.list'],
        ]);

        Route::post('store', [
            'as'         => 'admin.assets.store',
            'uses'       => 'Admin\AssetController@store',
            'middleware' => ['can:assets.create'],
        ]);

        Route::delete('{id}', [
            'as'         => 'admin.assets.delete',
            'uses'       => 'Admin\AssetController@delete',
            'middleware' => ['can:assets.delete'],
        ]);

        Route::group(['prefix' => 'directories'], function () {
            Route::get('', [
                'as'         => 'admin.assets.directories',
                'uses'       => 'Admin\DirectoryController@index',
                'middleware' => ['can:assets.directories.list'],
            ]);

            Route::post('store', [
                'as'         => 'admin.assets.directories.store',
                'uses'       => 'Admin\DirectoryController@store',
                'middleware' => ['can:assets.directories.create'],
            ]);
        });
    });
});
