<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where the core FusionCMS API routes are defined. These
| routes are loaded by the FusionServiceProvider within a group which
| is assigned the "api" middleware group.
|
*/

Route::get('/admin/navigation', 'NavigationController@index');
Route::get('/fieldtypes', 'FieldtypeController@index');
Route::get('/fieldtypes/{slug}', 'FieldtypeController@show');
Route::get('/structures', 'StructureController@index');
Route::get('/activity', 'ActivityController@index');
Route::patch('/assets/move', 'MoveAssetsController@move');
Route::get('/backups', 'Backups\BackupController@index');
Route::post('/backups', 'Backups\BackupController@store');
Route::delete('/backups/{backup}', 'Backups\BackupController@delete');
Route::post('/backups/upload/', 'Backups\BackupUploadController@index');
Route::post('/backups/restore/{backup}', 'Backups\BackupRestoreController@index');
Route::post('/fields/validate', 'FieldController@valid');
Route::patch('/fields/reorder', 'FieldController@reorder');
Route::get('files/{uuid}/download', 'FileDownloadController@index');
Route::post('files/move', 'FileMoveController@store');
Route::post('files/replace/{file}', 'FileReplaceController@store');
Route::get('/imports/mapping/{import}', 'ImportMappingController@show');
Route::patch('/imports/mapping/{import}', 'ImportMappingController@update');
Route::get('/imports/queue', 'ImportQueueController@index');
Route::post('/imports/queue/{import}', 'ImportQueueController@store');
Route::get('/imports/logs/{importLog}', 'ImportLogController@index');
Route::post('/tmpfile', 'UploadTempFile@index');
Route::get('/logs', 'LogsController@index');
Route::get('mail/test', 'MailController@index');
Route::get('/pages/{slug}', 'PageController@show');
Route::get('/matrices/slug/{slug}', 'MatrixController@slug');
Route::get('/collections/{slug}', 'CollectionController@index');
Route::get('/collections/{slug}/{id}', 'CollectionController@show');
Route::get('/collections/{slug}/create', 'CollectionController@create');
Route::post('/collections/{slug}', 'CollectionController@store');
Route::patch('/collections/{slug}/{id}', 'CollectionController@update');
Route::get('/collections/{slug}/{id}/edit', 'CollectionController@edit');
Route::delete('/collections/{slug}/{id}', 'CollectionController@destroy');
Route::post('/menus/{menu}/nodes/move/before', 'NodeMoveBeforeController');
Route::post('/menus/{menu}/nodes/move/after', 'NodeMoveAfterController');
Route::patch('/menus/{menu}/nodes/refresh', 'NodeRefreshController');
Route::post('/menus/{menu}/reorder', 'NodeReorderController');
Route::get('/settings', 'SettingsController@index');
Route::get('/settings/{section}', 'SettingsController@show');
Route::patch('/settings/{section}', 'SettingsController@update');
Route::get('/taxonomies/slug/{slug}', 'TaxonomyController@slug');
Route::get('/taxonomies/{slug}', 'TermController@index');
Route::get('/taxonomies/{slug}/{id}', 'TermController@show');
Route::get('/taxonomies/{slug}/create', 'TermController@create');
Route::post('/taxonomies/{slug}', 'TermController@store');
Route::patch('/taxonomies/{slug}/{id}', 'TermController@update');
Route::get('/taxonomies/{slug}/{id}/edit', 'TermController@edit');
Route::delete('/taxonomies/{slug}/{id}', 'TermController@destroy');
Route::post('/themes/verify', 'Themes\VerifyController@index');
Route::get('/theme', 'Themes\ActiveController@show');
Route::patch('/theme/{theme}', 'Themes\ActiveController@update');
Route::post('users/{user}/password', 'Users\PasswordController@index');

Route::group(['prefix' => 'insights'], function () {
    Route::get('/check', 'Insights\CheckConfigurationController@index');
    Route::get('/overview', 'Insights\OverviewController@index');
    Route::get('/visitors', 'Insights\VisitorsController@index');
    Route::get('/popular', 'Insights\PopularController@index');
    Route::get('/referrers', 'Insights\ReferrersController@index');
    Route::get('/browsers', 'Insights\BrowsersController@index');
});

Route::apiResource('roles', 'Users\RoleController');
Route::apiResource('users', 'Users\UserController');
Route::apiResource('/themes', 'Themes\BrowseController');
Route::apiResource('/taxonomies', 'TaxonomyController');
Route::apiResource('/menus/{menu}/nodes', 'NodeController');
Route::apiResource('/menus', 'MenuController');
Route::apiResource('/pages', 'PageController');
Route::apiResource('/matrices', 'MatrixController');
Route::apiResource('mailables', 'MailableController')->except(['store', 'destroy']);
Route::apiResource('/imports', 'ImportController');
Route::apiResource('/forms/{slug}/responses', 'ResponseController');
Route::apiResource('/forms', 'FormController');
Route::apiResource('files', 'FileController');
Route::apiResource('directories', 'DirectoryController');
Route::apiResource('/fieldsets', 'FieldsetController');
Route::apiResource('/fieldsets/{fieldset}/sections', 'FieldsetSectionController');
Route::apiResource('/extensions', 'ExtensionController');