<?php

namespace App\Http\Controllers\API;

use App\Models\File;
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
        $files     = $request->input('files');
        $directory = $request->input('directory');

    	collect($files)->each(function($fileId) use ($directory) {
    		File::findOrFail($fileId)->update(['directory_id' => $directory]);
    	});
    	
    	return;
    }
}