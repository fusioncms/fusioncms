<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::post('/menus/{menu}/nodes/move/before', 'NodeMoveBeforeController');
Route::post('/menus/{menu}/nodes/move/after', 'NodeMoveAfterController');
Route::patch('/menus/{menu}/nodes/refresh', 'NodeRefreshController');

Route::post('/menus/{menu}/reorder', 'NodeReorderController');
Route::apiResource('/menus/{menu}/nodes', 'NodeController');
Route::apiResource('/menus', 'MenuController');