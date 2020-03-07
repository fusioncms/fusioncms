<?php

namespace App\Http\Controllers\API;

use App\Models\File;
use App\Models\Directory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\FileMoveRequest;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;

class FileMoveController extends Controller
{
	/**
     * Move file to directory in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function store(FileMoveRequest $request)
    {
        $directory = $request->input('directory');
        $moving    = $request->input('moving');

        collect($moving['files'])->each(function($id) use ($directory) {
        	File::findOrFail($id)->update(['directory_id' => $directory]);
        });

        collect($moving['directories'])->each(function($id) use ($directory) {
            if ($id !== $directory) {
                Directory::findOrFail($id)->update(['parent_id' => $directory]);
            }
        });
    }
}