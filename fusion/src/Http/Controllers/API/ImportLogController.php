<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\ImportLog;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Fusion\Http\Resources\ImportLogResource;

class ImportLogController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ImportLog $importLog)
    {
        $this->authorize('importlog.show');

        return new ImportLogResource($importLog);
    }
}
