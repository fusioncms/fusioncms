<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Models\File;
use Illuminate\Support\Str;
use League\Glide\ServerFactory;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use League\Glide\Responses\LaravelResponseFactory;
use Fusion\Http\Streamers\Video\LaravelStreamer as LaravelVideoStreamer;

class FileController extends Controller
{
    public function index($uuid, $filename)
    {
        $file = File::where('uuid', $uuid)->firstOrFail();

        // Append last modified date
        $params      = request()->all();
        $params['t'] = $file->updated_at->format('U');

        if ($filename !== $file->original) {
            return redirect()->to('/file/' . $uuid . '/' . $file->original . '?' . http_build_query($params));
        }

        if (Str::startsWith($file->mimetype, 'image') and $file->mimetype !== 'image/gif') {
            return $this->imageResponse($file->location, $params);
        }

        if (Str::startsWith($file->mimetype, 'video')) {
            return $this->videoResponse($file->location, $file->mimetype);
        }

        return Storage::drive('public')->response($file->location);
    }

    protected function imageResponse($path, $params)
    {
        return glide()->getImageResponse($path, $params);
    }

    protected function videoResponse($path, $mimetype)
    {
        $path = storage_path('app/public/'.$path);

        return (new LaravelVideoStreamer($path, $mimetype))->stream();
    }
}