<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::get('/backups', 'Backups\BackupController@index');
Route::post('/backups/store', 'Backups\BackupController@store');
Route::delete('/backups/{backup}', 'Backups\BackupController@delete');

Route::post('/backups/restore/{backup}', 'Backups\BackupRestoreController');