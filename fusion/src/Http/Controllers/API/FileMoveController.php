<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\File;
use Fusion\Models\Directory;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
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
    public function store(Request $request)
    {
        $directory = $request->input('directory');
        $moving    = $request->input('moving');
        $errors    = [];

        // Assign new `directory_id` to files..
        collect($moving['files'])->each(function($id) use ($directory) {
        	File::findOrFail($id)->update(['directory_id' => $directory]);
        });

        // Assign new `parent_id` to directories..
        foreach ($moving['directories'] as $id) {
            if ($id !== $directory) {
                $dir = Directory::findOrFail($id);

                try {
                    $dir->update(['parent_id' => $directory]);
                } catch (QueryException $ex) {
                    $errors[] = "Could not move `{$dir->name}` due to conflicting names.";
                }
            }
        }

        if (! empty($errors)) {
            throw \Illuminate\Validation\ValidationException::withMessages(['moving' => $errors]);
        }
    }
}