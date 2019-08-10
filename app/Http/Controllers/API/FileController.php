<?php

namespace App\Http\Controllers\API;

use Image;
use App\Models\File;
use Ramsey\Uuid\Uuid;
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

        if ($request->exists('search')) {
            $files = $files->whereLike('name', $request->get('search'));
        }

        if ($request->exists('sort') and in_array($request->get('sort'), $sortable)) {
            if ($request->exists('direction') and in_array($request->get('direction'), $directions)) {
                $direction = $request->get('direction');
            } else {
                $direction = 'asc';
            }

            $files = $files->orderBy($request->get('sort'), $direction);
        }

        return FileResource::collection($files->get());
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
            'file'      => 'file',
            'directory_id' => [
                Rule::unique('directories', 'name')->where(function ($query) use ($request) {
                    return $query->where('parent_id', $request->parent_id);
                }),
            ],
        ]);

        $upload    = $request['file'];
        $extension = $upload->clientExtension();
        $uuid      = unique_id();
        $name      = pathinfo($upload->getClientOriginalName(), PATHINFO_FILENAME);
        $slug      = str_slug($uuid.' '.$name);
        $location  = $upload->storeAs('files', "$slug.$extension");
        $filesize  = $upload->getSize();

        $file = File::create([
            'directory_id' => null,
            'name'         => $name,
            'slug'         => $slug,
            'uuid'         => $uuid,
            'location'     => $location,
            'original'     => $upload->getClientOriginalName(),
            'extension'    => $extension,
            'mimetype'     => $upload->getClientMimeType(),
            'bytes'        => $filesize,
        ]);

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