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
use App\Services\Logs\LogRepository;

class LogsController extends Controller
{
    /**
     * @var LogRepositoryInterface
     */
    protected $log;

    public function __construct(LogRepository $log, Request $request)
    {
        parent::__construct();

        $this->log     = $log;
        $this->request = $request;
    }

    /**
     * Display a listing of all themes.
     *
     * @return Theme
     */
    public function index()
    {
        if ($this->request->input('l')) {
            $this->log->setFile($this->request->input('l'));
        }

        $logs        = $this->log->getAll();
        $files       = $this->log->getFiles(true);
        $currentFile = $this->log->getFileName();

        return json_encode(['logs' => $logs, 'files' => $files, 'currentFile' => $currentFile]);
    }
}
