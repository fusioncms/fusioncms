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
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use App\Http\Requests\DirectoryRequest;
use App\Http\Resources\DirectoryResource;
use Illuminate\Database\Eloquent\Builder;

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
            $directories = Directory::hierarchy()->get();
        } else {
            $directories = QueryBuilder::for(Directory::class)
                ->withCount('files')
                ->allowedFilters([
                    AllowedFilter::exact('parent_id')->default(0),
                    AllowedFilter::callback('search', function (Builder $query, $value) {
                        $query->where('name', 'like', "%{$value}%");
                    })
                ])
                ->allowedSorts('name')
                ->defaultSort('name')
                ->get();
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
        $directory = Directory::create($request->validated());

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
     * @param  \App\Http\Requests\DirectoryRequest  $request
     * @param  \App\Models\Directory  $directory
     * @return \App\Http\Resources\DirectoryResource
     */
    public function update(DirectoryRequest $request, Directory $directory)
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
