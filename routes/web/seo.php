<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::get('sitemap', [
    'as'   => 'sitemap',
    'uses' => 'SitemapController@index',
]);

Route::get('sitemap.xml', [
    'as'   => 'sitemap.xml',
    'uses' => 'SitemapController@xml',
]);
