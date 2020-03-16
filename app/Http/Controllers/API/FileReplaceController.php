<?php

namespace App\Http\Controllers\API;

use App\Models\File;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;
use Illuminate\Support\Facades\Storage;

class FileReplaceController extends Controller
{
	/**
     * Replace file in storage with another.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\File          $file
     */
    public function store(Request $request, File $file)
    {
        $upload    = $request->file('file');
        $name      = $file->name;
        $uuid      = $file->uuid;
        $extension = $upload->extension();
        $bytes     = $upload->getSize();
        $mimetype  = $upload->getClientMimeType();
        $original  = Str::slug($name) . ".{$extension}";

        if (Str::startsWith($mimetype, 'image')) {
            list($width, $height) = getimagesize($upload);
        }

        $oldPath = $file->location;
        $newPath = 'files/' . Str::slug($uuid . ' ' . $name) . ".{$extension}";

        // Rename file..
        if ($oldPath !== $newPath) {
            Storage::disk('public')->move($oldPath, $newPath);
        }

        $file->update([
            'extension' => $extension,
            'bytes'     => $bytes,
            'original'  => $original,
            'mimetype'  => $mimetype,
            'location'  => $newPath,
            'width'     => $width ?? null,
            'height'    => $height ?? null,
        ]);

        return new FileResource($file);
    }
}