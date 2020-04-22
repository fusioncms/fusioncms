<?php

namespace Fusion\Http\Controllers\API\Modules;

use Exception;
use ZipArchive;
use Fusion\Jobs\DumpAutoload;
use Illuminate\Support\Facades\Log;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ModuleUploadRequest;

class UploadController extends Controller
{
    /**
     * Request for new module installation.
     *
     * @param  \Fusion\Http\Requests\ModuleUploadRequest $request
     * @return void
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
                Module::set($settings->slug . '::enabled', false);

                dispatch(function() use ($settings) {
                    DumpAutoload::dispatchNow();
                    Module::set($settings->slug . '::registered', true);
                })->afterResponse();
            } else {
                throw new Exception('Unable to locate and unzip module file.');
            }
        } catch (Exception $exception) {
            Log::error('[Module Upload]: ' . $exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }
}
