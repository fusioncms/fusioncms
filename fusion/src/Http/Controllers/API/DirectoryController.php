<?php

namespace Fusion\Http\Controllers\Api;

use Fusion\Models\Directory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Fusion\Http\Requests\DirectoryRequest;
use Fusion\Http\Resources\DirectoryResource;
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
     * @param  \Fusion\Http\Requests\DirectoryRequest  $request
     * @return \Fusion\Http\Resources\DirectoryResource
     */
    public function store(DirectoryRequest $request)
    {
        $directory = Directory::create($request->validated());

        return new DirectoryResource($directory);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Models\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function show(Directory $directory)
    {
        return new DirectoryResource($directory);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\DirectoryRequest  $request
     * @param  \Fusion\Models\Directory  $directory
     * @return \Fusion\Http\Resources\DirectoryResource
     */
    public function update(DirectoryRequest $request, Directory $directory)
    {
        $directory->update($request->validated());

        return new DirectoryResource($directory);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Fusion\Models\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Directory $directory)
    {
        $directory->delete();
    }
}
