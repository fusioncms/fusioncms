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

Route::get('file/glide/{uuid}/{filename}', function($uuid, $filename) {
    $tag = str_slug($uuid.'.'.$filename.'.'.(json_encode(request()->all())), '.');

    // return Cache::remember($tag, 24*60, function() use ($uuid, $filename) {
        $file = File::where('uuid', $uuid)->first();

        if (! $file) {
            abort(404);
        }

        if ($filename !== $file->original) {
            return redirect('/file/glide/'.$uuid.'/'.$file->original);
        }

        $filesystem = app('filesystem');
        $path = $file->location;

        $server = ServerFactory::create([
            'response'          => new LaravelResponseFactory(app('request')),
            'source'            => $filesystem->getDriver(),
            'cache'             => $filesystem->getDriver(),
            'cache_path_prefix' => '.cache',
            'base_url'          => 'file',
        ]);

        return $server->getImageResponse($path, request()->all());
    // });
});

Route::get('file/intervention/{uuid}/{filename}', function($uuid, $filename) {
    $file = File::where('uuid', $uuid)->first();

    if (! $file) {
        abort(404);
    }

    if ($filename !== $file->original) {
        return redirect('/file/glide/'.$uuid.'/'.$file->original.request()->all());
    }

    $image = Image::cache(function($image) use ($file) {
        return $image->make(Storage::get($file->location))->fit(500);
    }, 10, true);

    // $image = Image::make(Storage::get($file->location))->fit(500);

    return $image->response();
});