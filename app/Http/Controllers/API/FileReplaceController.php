<?php

namespace App\Http\Controllers\API;

use App\Models\File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;

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
        $request->file('file')->storeAs('', $file->location);

        $file->touch();

        return new FileResource($file);
    }
}