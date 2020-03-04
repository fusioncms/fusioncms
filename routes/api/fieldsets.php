<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::apiResource('/fieldsets', 'FieldsetController');
Route::apiResource('/fieldsets/{fieldset}/sections', 'FieldsetSectionController');

Route::post('/fields/validate', 'FieldController@valid');
Route::patch('/fields/reorder', 'FieldController@reorder');
