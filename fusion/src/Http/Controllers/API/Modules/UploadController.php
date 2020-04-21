<?php

namespace Fusion\Http\Controllers\API\Modules;

use Exception;
use ZipArchive;
use Illuminate\Support\Facades\Log;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ModuleResource;
use Fusion\Http\Requests\ModuleUploadRequest;

class UploadController extends Controller
{
    /**
     * Request for new module installation.
     *
     * @param  \Fusion\Http\Requests\ModuleUploadRequest $request
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function store(ModuleUploadRequest $request)
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

                Module::optimize();
                Module::disable($settings->slug);
                
                return new ModuleResource(Module::where('slug', $settings->slug));
            } else {
                throw new Exception('Unable to locate and unzip module file.');
            }
        } catch (Exception $exception) {
            Log::error('[Module Upload]: ' . $exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }
}
