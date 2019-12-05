<?php

namespace App\Http\Controllers\API\Backups;

use Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;

class BackupUploadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  Request  $request
     * @return void
     */
    public function __invoke(Request $request)
    {
        // Validation parameters..
        $maxFileUpload = byte_converter('50', 'MB', 'KB');
        $acceptedMimes = ['zip'];

        // Validate..
        $attributes  = $request->validate([
            'file-upload' => 'required|file|mimes:' . implode(',', $acceptedMimes) . '|max:' . $maxFileUpload,
        ]);

        $file     = $attributes['file-upload'];
        $filename = Carbon::now()->format('Y-m-d-H-i-s').'.zip';

        // Save to backup destination disks..
        $disks = config('backup.backup.destination.disks', ['public']);
        
        foreach ($disks as $disk) {
            $file->storeAs('backups', $filename, [ $disk ]);
        }

        return response()->json([], 201);
    }
}
