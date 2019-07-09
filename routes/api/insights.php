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
    Route::get('/check', 'Insights\CheckConfigurationController');
    Route::get('/overview', 'Insights\OverviewController');
    Route::get('/visitors', 'Insights\VisitorsController');
    Route::get('/popular', 'Insights\PopularController');
    Route::get('/referrers', 'Insights\ReferrersController');
    Route::get('/browsers', 'Insights\BrowsersController');
});
