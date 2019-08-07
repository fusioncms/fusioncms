<?php

namespace App\Http\Controllers\Web;

use App\Models\File;
use Illuminate\Http\Request;
use League\Glide\ServerFactory;
use App\Http\Controllers\Controller;
use League\Glide\Responses\LaravelResponseFactory;

class TestController extends Controller
{
    public function __invoke(Request $request, $uuid, $filename)
    {
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
    }
}