<?php

namespace App\Http\Controllers\API;

use App\Models\File;
use App\Models\Directory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FileMoveController extends Controller
{
	/**
     * Move file to directory in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        $moving    = $request->input('moving');
        $directory = $request->input('directory');

    	collect($moving['files'])->each(function($fileId) use ($directory) {
    		File::findOrFail($fileId)->update(['directory_id' => $directory]);
    	});

        collect($moving['directories'])->each(function($directoryId) use ($directory) {
            if ($directoryId !== $directory) {
                Directory::findOrFail($directoryId)->update(['parent_id' => $directory]);
            }
        });
    }
}