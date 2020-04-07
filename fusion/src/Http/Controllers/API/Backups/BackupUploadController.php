<?php

namespace Fusion\Http\Controllers\API\Backups;

use Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Fusion\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;

class BackupUploadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  Request  $request
     * @return void
     */
    public function index(Request $request)
    {
        // Validation parameters..
        $acceptedMimes = ['zip'];

        // Validate..
        $attributes  = $request->validate([
            'file-upload' => 'required|file|mimes:' . implode(',', $acceptedMimes),
        ]);

        $file     = $attributes['file-upload'];
        $filename = Carbon::now()->format('Y-m-d-H-i-s').'.zip';

        // Save to backup destination disks..
        foreach (config('backup.backup.destination.disks') as $disk) {
            $file->storeAs('backups', $filename, [ $disk ]);
        }

        return response()->json([], 201);
    }
}
