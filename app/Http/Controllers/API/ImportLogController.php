<?php

namespace App\Http\Controllers\API;

use App\Models\ImportLog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\ImportLogResource;

class ImportLogController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, ImportLog $importLog)
    {
        $this->authorize('importlog.show');

        return new ImportLogResource($importLog);
    }
}
