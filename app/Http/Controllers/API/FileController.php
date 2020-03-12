<?php

namespace App\Http\Controllers\API;

use Image;
use App\Models\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Requests\FileRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

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
     * @param  \App\Http\Requests\FileRequest  $request
     * @return \App\Http\Resources\FileResource
     */
    public function store(FileRequest $request)
    {
        $file = File::create($request->validated());

        return new FileResource($file);
    }

    /**
     * Update an existing resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\File          $file
     * @return \App\Http\Resources\FileResource
     */
    public function update(Request $request, File $file)
    {
        $this->authorize('files.update');

        $data = $request->validate([
            'name'         => 'required_without_all:description,directory_id',
            'description'  => 'required_without_all:name,directory_id',
            'directory_id' => 'required_without_all:name,description'
        ]);

        $originalName = $file->name;
        $oldLocation  = $file->location;

        $file->update($data);

        // Rename the file if name has updated
        if ($request->has('name')) {
            $name        = Str::slug($file->uuid.' '.$file->name);
            $slug        = Str::slug($file->name);
            $original    = str_replace($originalName, $file->name, $file->original);
            $newLocation = str_replace(Str::slug($originalName), $slug, $file->location);

            if ($oldLocation !== $newLocation) {
                Storage::disk('public')->move($oldLocation, $newLocation);
            }

            $file->update([
                'slug'     => Str::slug($file->name),
                'original' => $original,
                'location' => $newLocation,
            ]);
        }

        return new FileResource($file);
    }

    public function destroy(Request $request, File $file)
    {
        $this->authorize('files.destroy');
        
        Storage::delete($file->location);

        $file->delete();
    }
}