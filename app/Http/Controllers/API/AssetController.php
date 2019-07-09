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

use App\Models\Asset;
use Ramsey\Uuid\Uuid;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Resources\AssetResource;

class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->directory_id) {
            return Asset::whereDirectoryId($request->directory_id)->paginate();
        }

        return AssetResource::collection(Asset::whereNull('directory_id')->paginate());
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
            'files.*'      => 'file',
            'directory_id' => [
                Rule::unique('directories', 'name')->where(function ($query) use ($request) {
                    return $query->where('parent_id', $request->parent_id);
                }),
            ],
        ]);
        $assets = collect();

        /* @var $file \Illuminate\Http\UploadedFile */
        foreach ($request->file('files') as $file) {
            $extension = $file->clientExtension();
            $uuid      = Uuid::uuid4();
            $asset     = Asset::create([
                'directory_id' => $request->directory_id,
                'name'         => pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME),
                'slug'         => $uuid,
                'location'     => $file->storeAs('assets', "$uuid.$extension"),
                'original'     => $file->getClientOriginalName(),
                'extension'    => $extension,
                'mimetype'     => $file->getClientMimeType(),
            ]);

            $assets->push($asset);
        }

        return AssetResource::collection($assets);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Asset  $asset
     * @return \Illuminate\Http\Response
     */
    public function show(Asset $asset)
    {
        return AssetResource::make($asset);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Asset  $asset
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Asset $asset)
    {
        $request->validate([
            'name'        => 'required|max:255',
            'description' => 'max:8192',
        ]);

        $asset->update($request->only('name', 'description'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Asset  $asset
     * @return \Illuminate\Http\Response
     */
    public function destroy(Asset $asset)
    {
        $asset->delete();
    }
}
