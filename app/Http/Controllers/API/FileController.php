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
    public function index($directory = null)
    {
        $files = File::where('directory_id', $directory)->get();

        return FileResource::collection($files);
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
            // 'directory_id' => [
            //     Rule::unique('directories', 'name')->where(function ($query) use ($request) {
            //         return $query->where('parent_id', $request->parent_id);
            //     }),
            // ],
        ]);

        $upload = $request['file'];
        
        $extension = $upload->clientExtension();
        
        $uuid     = unique_id();
        $name     = pathinfo($upload->getClientOriginalName(), PATHINFO_FILENAME);
        $slug     = str_slug($uuid.' '.$name);
        $location = $upload->storeAs('files', "$slug.$extension");

        $file = File::create([
            'directory_id' => null,
            'name'         => $name,
            'slug'         => $slug,
            'uuid'         => $uuid,
            'location'     => $location,
            'original'     => $upload->getClientOriginalName(),
            'extension'    => $extension,
            'mimetype'     => $upload->getClientMimeType(),
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