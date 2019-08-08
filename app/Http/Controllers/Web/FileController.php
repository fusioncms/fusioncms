<?php

namespace App\Http\Controllers\Web;

use App\Models\File;
use League\Glide\ServerFactory;
use Illuminate\Routing\Controller;
use League\Glide\Responses\LaravelResponseFactory;

class FileController extends Controller
{
    public function __invoke($uuid, $filename)
    {
        $file = File::where('uuid', $uuid)->first();

        if (! $file) {
            abort(404);
        }

        if ($filename !== $file->original) {
            return redirect()->to('/file/'.$uuid.'/'.$file->original.'?'.request()->getQueryString());
        }

        $filesystem = app('filesystem')->getDriver();
        $path       = $file->location;

        $server = ServerFactory::create([
            'response'          => new LaravelResponseFactory(app('request')),
            'source'            => $filesystem,
            'cache'             => $filesystem,
            'cache_path_prefix' => '.cache',
        ]);

        return $server->getImageResponse($path, request()->all());
    }
}