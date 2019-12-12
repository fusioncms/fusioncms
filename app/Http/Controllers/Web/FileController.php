<?php

namespace App\Http\Controllers\Web;

use App\Models\File;
use Illuminate\Support\Str;
use League\Glide\ServerFactory;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use League\Glide\Responses\LaravelResponseFactory;
use App\Http\Streamers\Video\LaravelStreamer as LaravelVideoStreamer;

class FileController extends Controller
{
    public function index($uuid, $filename)
    {
        $file = File::where('uuid', $uuid)->first();

        if (! $file) {
            abort(404);
        }

        if ($filename !== $file->original) {
            return redirect()->to('/file/'.$uuid.'/'.$file->original.'?'.request()->getQueryString());
        }

        if (Str::startsWith($file->mimetype, 'image')) {
            return $this->imageResponse($file->location);
        }

        if (Str::startsWith($file->mimetype, 'video')) {
            return $this->videoResponse($file->location, $file->mimetype);
        }

        return Storage::drive('public')->response($file->location);
    }

    protected function imageResponse($path)
    {
        $filesystem = app('filesystem')->getDriver();

        $server = ServerFactory::create([
            'response'          => new LaravelResponseFactory(app('request')),
            'source'            => $filesystem,
            'cache'             => $filesystem,
            'cache_path_prefix' => '.cache',
        ]);

        return $server->getImageResponse($path, request()->all());
    }

    protected function videoResponse($path, $mimetype)
    {
        $path = storage_path('app/public/'.$path);

        return (new LaravelVideoStreamer($path, $mimetype))->stream();
    }
}