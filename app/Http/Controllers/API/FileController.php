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
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    /**
     * 
     */
    public function index(Request $request, $directory = null)
    {
        $files      = File::where('directory_id', $directory);
        $directions = ['asc', 'desc'];
        $sortable   = ['name', 'bytes', 'updated_at'];
        $filterable = ['images', 'audio', 'videos', 'documents'];

        if ($request->exists('search')) {
            $files = $files->whereLike('name', $request->get('search'));
        }

        // if ($request->exists('directory')) {
        //     $files = $files->where('directory_id', $request->get('directory'));
        // } else {
        //     $files = $files->whereNull('directory_id');
        // }

        $files = $files->where('directory_id', 3);

        if ($request->exists('sort') and in_array($request->get('sort'), $sortable)) {
            if ($request->exists('direction') and in_array($request->get('direction'), $directions)) {
                $direction = $request->get('direction');
            } else {
                $direction = 'asc';
            }

            $files = $files->orderBy($request->get('sort'), $direction);
        }

        if ($request->exists('filter') and in_array($request->get('filter'), $filterable)) {
            switch($request->get('filter')) {
                case 'documents':
                    $filters = ['text', 'application'];
                    break;
                default:
                    $filters = [Str::singular($request->get('filter'))];
                    break;
            }

            $files = $files->where(function ($query) use ($filters) {
                foreach ($filters as $filter) {
                    $query->orWhere('mimetype', 'like', "{$filter}%");
                }
            });
        }

        return FileResource::collection($files->paginate(50));
    }

    /**
     * Show the specific resource.
     * 
     * @param  string  $uuid
     * @return 
     */
    public function show(Request $request, $uuid)
    {
        $file = File::where('uuid', $uuid)->first();

        if (! $file) {
            abort(404);
        }

        return new FileResource($file);
    }

    /**
     * Persist a new resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  integer|null  $directory
     */
    public function store(Request $request, $directory = null)
    {
        $request->validate([
            'file'         => 'file',
            'directory_id' => 'sometimes',
        ]);

        $upload    = $request->file('file');
        $extension = $upload->extension();
        $uuid      = unique_id();
        $name      = pathinfo($upload->getClientOriginalName(), PATHINFO_FILENAME);
        $slug      = str_slug($uuid.' '.$name);
        $location  = $upload->storeAs('files', "$slug.$extension");
        $filesize  = $upload->getSize();
        $mimetype  = $upload->getClientMimeType();
        $original  = str_slug($name).'.'.$extension;
        $width     = null;
        $height    = null;
        
        if (Str::startsWith($mimetype, 'image')) {
            list($width, $height) = getimagesize($upload);
        }

        $file = File::create([
            'directory_id' => $request->input('directory_id'),
            'name'         => $name,
            'slug'         => $slug,
            'uuid'         => $uuid,
            'location'     => $location,
            'original'     => $original,
            'extension'    => $extension,
            'mimetype'     => $mimetype,
            'bytes'        => $filesize,
            'width'        => $width,
            'height'       => $height,
        ]);

        return new FileResource($file);
    }

    public function update(Request $request, File $file)
    {
        $this->authorize('file.update');

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
            $name        = str_slug($file->uuid.' '.$file->name);
            $slug        = str_slug($file->name);
            $original    = str_replace($originalName, $file->name, $file->original);
            $newLocation = str_replace(str_slug($originalName), $slug, $file->location);

            if ($oldLocation !== $newLocation) {
                Storage::disk('public')->move($oldLocation, $newLocation);
            }

            $file->update([
                'slug'     => str_slug($file->name),
                'original' => $original,
                'location' => $newLocation,
            ]);
        }

        return new FileResource($file);
    }

    public function destroy(Request $request, File $file)
    {
        $this->authorize('file.destroy');

        activity()
            ->performedOn($file)
            ->withProperties([
                'icon' => 'file-alt',
            ])
            ->log('Deleted file (:subject.name)');

        Storage::delete($file->location);

        $file->delete();
    }
}