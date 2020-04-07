<?php


Route::get('/test', 'TestController@index');

Route::get('/feed.json', 'RSSController@index');