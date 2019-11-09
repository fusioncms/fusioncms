<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UploadTempFile extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // Validation parameters..
        $maxFileUpload = setting('files.file_size_upload_limit');
        $maxFileUpload = byte_converter($maxFileUpload, 'MB', 'KB');
        $mimetypes     = $request->input('mimetypes');

        $attributes  = $request->validate([
            'file' => 'required|file|mimetypes:' . $mimetypes . '|size:' . $maxFileSize,
        ]);

        $file     = $attributes['file'];
        $fileExtn = $file->guessClientExtension();
        $fileName = time() . '.' . $fileExtn;
        $filePath = sys_get_temp_dir() . '/' . $fileName;

        $file->storeAs(sys_get_temp_dir(), $fileName);

        return response()->json(['filePath' => $filePath]);
    }
}
