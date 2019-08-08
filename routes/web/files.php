<?php

use App\Models\File;
use League\Glide\ServerFactory;
use Illuminate\Contracts\Filesystem\Filesystem;
use League\Glide\Responses\LaravelResponseFactory;

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('file/{uuid}/{filename}', 'FileController');