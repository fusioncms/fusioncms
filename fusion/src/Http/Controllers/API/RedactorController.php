<?php

namespace Fusion\Modules\Assets\Http\Controllers\API\v1;

use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;

class RedactorController extends Controller
{
    /**
     * @var \Fusion\Modules\Assets\API\Transformers\AssetTransformer
     */
    protected $transformer;

    /**
     * Constructor.
     * @param \Fusion\Modules\Assets\API\Transformers\AssetTransformer $transformer
     */
    public function __construct(AssetTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * !! Temporary API Endpoint !!
     * Only to be used with the WYSIWYG image manager plugin!
     * @deprecated
     */
    public function index()
    {
        $assets = Asset::where(function ($query) {
            $query->where('mimetype', 'like', 'image' . '%');
        })->get()->map(function ($asset) {
            return [
                'id'    => $asset->id,
                'title' => $asset->name,
                'thumb' => $asset->path() . '?w=100&h=100',
                'url'   => $asset->path(),
            ];
        });

        return $assets;
    }

    /**
     * Add asset.
     *
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $asset     = $request->file('file')[0];
        $original  = $asset->getClientOriginalName();
        $slug      = uniqid();
        $extension = $asset->guessClientExtension();
        $name      = str_replace('.' . $extension, '', $original);
        $mimetype  = $asset->getClientMimeType();
        $location  = $asset->storeAs('assets', $slug . '.' . $extension);

        $record = Asset::create([
            'name'      => $name,
            'slug'      => $slug,
            'location'  => $location,
            'original'  => $original,
            'extension' => $extension,
            'mimetype'  => $mimetype,
        ]);

        if ($request->has('directory')) {
            $directory = $this->assignToDirectory($request);

            $record->directories()->attach($directory->id);
        }

        $response = collect([
            'file' => [
                'url'   => $record->path(),
                'name'  => $record->name,
                'id'    => $record->id,
            ],
        ]);

        return $response->toJson();
    }

    /**
     * Assign Asset to Directory (if applicable).
     *
     * @param  Request $request
     * @return Directory
     */
    protected function assignToDirectory($request)
    {
        $parent_id = $request->input('parent_id');
        $name      = $request->input('directory');

        $directory = Directory::where('name', $name)->first();

        if (! isset($directory)) {
            $directory = Directory::create([
                'parent_id' => $parent_id,
                'name'      => $name,
                'slug'      => uniqid(),
            ]);
        }

        return $directory;
    }
}
