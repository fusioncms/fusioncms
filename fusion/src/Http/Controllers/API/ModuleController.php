<?php

namespace Fusion\Http\Controllers\API;

use Exception;
use ZipArchive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ModuleRequest;
use Fusion\Http\Resources\ModuleResource;

class ModuleController extends Controller
{
    /**
     * Display all resources.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function index(Request $request)
    {
        return ModuleResource::collection(Module::all()->values());
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slug
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function show(Request $request, $slug)
    {
        return new ModuleResource(Module::where('slug', $slug));
    }

    /**
     * Request for new module installation.
     *
     * @param  \Fusion\Http\Requests\CollectionRequest $request
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function store(ModuleRequest $request)
    {
        $upload     = request()->file('file-upload');
        $zipArchive = new ZipArchive;

        try {
            if ($zipArchive->open($upload) === true) {
                $index      = $zipArchive->locateName('module.json', ZipArchive::FL_NODIR);
                $filename   = $zipArchive->getNameIndex($index);
                $fileHandle = $zipArchive->getStream($filename);
                
                $settings   = stream_get_contents($fileHandle);
                $settings   = json_decode($settings);

                // --
                $zipArchive->extractTo(base_path('modules'));
                $zipArchive->close();

                Artisan::call('module:optimize');
            } else {
                throw new Exception('Unable to locate and unzip module file.');
            }
        } catch (Exception $exception) {
            Log::error('[Module Upload]: ' . $exception->getMessage(), (array) $exception->getTrace()[0]);
        }

        return new ModuleResource(Module::where('slug', $settings->slug));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\ModuleRequest $request
     * @param  string  $slug
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function update(ModuleRequest $request, $slug)
    {
        // ..
    }

    /**
     * Destroy existing module.
     * 
     * @param  Request  $request
     * @param  string   $slug
     * @return void
     */
    public function destroy(Request $request, $slug)
    {
        $module = Module::where('slug', $slug);

        File::deleteDirectory(base_path('modules/' . $module->get('basename')));
        
        Artisan::call('module:optimize');
    }
}
