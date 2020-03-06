<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Api;

use App\Models\Directory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\DirectoryRequest;
use App\Http\Resources\DirectoryResource;

class DirectoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $directories = Directory::withCount('files');

        if ($request->recursive) {
            $directories = $directories->whereNull('parent_id')->with('children.children')->get();
        } elseif ($request->directory) {
            $directories = $directories->whereParentId($request->directory)->get();
        } else {
            $directories = $directories->whereNull('parent_id')->get();
        }

        return DirectoryResource::collection($directories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\DirectoryRequest  $request
     * @return \App\Http\Resources\DirectoryResource
     */
    public function store(DirectoryRequest $request)
    {
        return new DirectoryResource(
            Directory::create($request->validated())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function show(Directory $directory)
    {
        return new DirectoryResource($directory);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Directory $directory)
    {
        $directory->update($request->validated());

        return new DirectoryResource($directory);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Directory $directory)
    {
        $directory->delete();
    }
}
