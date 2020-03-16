<?php

namespace App\Http\Controllers\API;

use Image;
use App\Models\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\FileUploadRequest;
use App\Http\Requests\FileUpdateRequest;

class FileController extends Controller
{
    /**
     *
     */
    public function index(Request $request)
    {
        $this->authorize('files.show');

        $files = QueryBuilder::for(File::class)
            ->allowedFilters([
                AllowedFilter::exact('directory_id')->default(0),
                AllowedFilter::scope('search', 'searchQuery'),
                AllowedFilter::scope('display', 'displayQuery'),
            ])
            ->allowedSorts(['name', 'bytes', 'updated_at'])
            ->defaultSort('name')
            ->paginate(
                request()->query('perPage', 50),
                ['*'],
                'page',
                request()->query('page', 1)
            );

        return FileResource::collection($files);
    }

    /**
     * Show the specific resource.
     *
     * @param  string  $uuid
     * @return
     */
    public function show(Request $request, $uuid)
    {
        $this->authorize('files.show');

        $file = File::where('uuid', $uuid)->firstOrFail();

        return new FileResource($file);
    }

    /**
     * Persist a new resource in storage.
     *
     * @param  \App\Http\Requests\FileUploadRequest  $request
     * @return \App\Http\Resources\FileResource
     */
    public function store(FileUploadRequest $request)
    {
        $file = File::create($request->validated());

        return new FileResource($file);
    }

    /**
     * Update an existing resource in storage.
     *
     * @param  \App\Http\Requests\FileUpdateRequest  $request
     * @param  \App\Models\File  $file
     * @return \App\Http\Resources\FileResource
     */
    public function update(FileUpdateRequest $request, File $file)
    {
        $file->update($request->validated());
        
        return new FileResource($file);
    }

    public function destroy(Request $request, File $file)
    {
        $this->authorize('files.destroy');
        
        Storage::delete($file->location);

        $file->delete();
    }
}