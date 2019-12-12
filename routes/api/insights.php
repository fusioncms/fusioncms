<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::group(['prefix' => 'insights'], function () {
    Route::get('/check', 'Insights\CheckConfigurationController@index');
    Route::get('/overview', 'Insights\OverviewController@index');
    Route::get('/visitors', 'Insights\VisitorsController@index');
    Route::get('/popular', 'Insights\PopularController@index');
    Route::get('/referrers', 'Insights\ReferrersController@index');
    Route::get('/browsers', 'Insights\BrowsersController@index');
});
