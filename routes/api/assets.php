<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::patch('/assets/move', 'MoveAssetsController@move');
Route::apiResource('assets', 'AssetController');
// Route::apiResource('directories', 'DirectoryController');
