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
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
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
        if ($request->recursive) {
            $directories = Directory::whereNull('parent_id')->with('children.children')->get();
        } elseif ($request->directory_id) {
            $directories = Directory::whereParentId($request->directory_id)->get();
        } else {
            $directories = Directory::whereNull('parent_id')->get();
        }

        return DirectoryResource::collection($directories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'      => [
                'required',
                Rule::unique('directories', 'name')->where(function ($query) use ($request) {
                    return $query->where('parent_id', $request->parent_id);
                }),
            ],
            'parent_id' => $request->directory_id ? 'exists:directories,id' : '',
        ]);

        $directory = Directory::create([
            'name'      => $request->name,
            'slug'      => str_slug($request->name),
            'parent_id' => $request->parent_id,
        ]);

        return new DirectoryResource($directory);
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
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $data = [
            'name' => $request->name,
            'slug' => str_slug($request->name),
        ];

        if ($request->directory_id) {
            $data['directory_id'] = $request->directory_id;
        }

        $directory->update($data);

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
