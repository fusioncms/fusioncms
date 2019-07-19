<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use Theme;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Logs\Repository;

class LogsController extends Controller
{

    /**
     * Return a JSON object of available log files
     * and error information in current log file
     * 
     * @return String
     */
    public function index(Request $request)
    {
        $log     = new Repository;
        $request = $request;

        if ($request->input('l')) {
            $log->setFile($request->input('l'));
        }

        $logs        = $log->all();
        $files       = $log->getFiles(true);
        $currentFile = $log->getFileName();

        return json_encode(['logs' => $logs, 'files' => $files, 'currentFile' => $currentFile]);
    }
}
