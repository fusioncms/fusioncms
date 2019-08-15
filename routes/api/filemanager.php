<?php

Route::apiResource('files', 'FileController');
Route::apiResource('directories', 'DirectoryController');
Route::get('files/{uuid}/download', 'FileDownloadController');