<?php

namespace App\Http\Controllers\API;

use App\Models\File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class FileDownloadController extends Controller
{
    public function index($uuid)
    {
        $file = File::where('uuid', $uuid)->firstOrFail();
        $path = Storage::disk('public')->path($file->location);

        return response()->download($path, $file->original);
    }
}