<?php

Route::apiResource('files', 'FileController');
Route::apiResource('directories', 'DirectoryController');
Route::get('files/{uuid}/download', 'FileDownloadController@index');
Route::post('files/move', 'FileMoveController@store');
Route::post('files/replace/{file}', 'FileReplaceController@store');