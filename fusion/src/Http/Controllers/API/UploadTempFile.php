<?php

namespace Fusion\Http\Controllers\API;

use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;

class UploadTempFile extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Validation parameters..
        $maxFileUpload = setting('files.file_size_upload_limit');
        $maxFileUpload = byte_converter($maxFileUpload, 'MB', 'KB');
        $mimetypes     = $request->input('mimetypes');

        $attributes  = $request->validate([
            'file' => 'required|file|mimetypes:' . $mimetypes . '|max:' . $maxFileSize,
        ]);

        $file     = $attributes['file'];
        $fileExtn = $file->guessClientExtension();
        $fileName = time() . '.' . $fileExtn;
        $filePath = sys_get_temp_dir() . '/' . $fileName;

        $file->storeAs(sys_get_temp_dir(), $fileName);

        return response()->json(['filePath' => $filePath]);
    }
}
