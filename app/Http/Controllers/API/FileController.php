<?php

namespace App\Http\Controllers\API;

use App\Models\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;

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
     * 
     */
    public function store(Request $request, $directory = null)
    {
        // return $request;
        // $files = collect();

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
        
        $uuid = Uuid::uuid4();
        $name = pathinfo($upload->getClientOriginalName(), PATHINFO_FILENAME);
        $file = File::create([
            'directory_id' => null,
            'name'         => $name,
            'slug'         => str_slug($uuid.' '.$name),
            'uuid'         => $uuid,
            'location'     => $upload->storeAs('assets', "$uuid.$extension"),
            'original'     => $upload->getClientOriginalName(),
            'extension'    => $extension,
            'mimetype'     => $upload->getClientMimeType(),
        ]);

        return new FileResource($file);
    }
}