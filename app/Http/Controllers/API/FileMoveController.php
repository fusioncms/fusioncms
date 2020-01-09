<?php

namespace App\Http\Controllers\API;

use Image;
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
     * @param  \App\Models\Directory     $directory
     */
    public function store(Request $request)
    {
        $files     = $request->input('files');
        $directory = $request->input('directory');

    	collect($files)->each(function($fileId) use ($directory) {
    		File::findOrFail($fileId)->update(['directory_id' => $directory]);
    	});
    	
    	return;
    }
}