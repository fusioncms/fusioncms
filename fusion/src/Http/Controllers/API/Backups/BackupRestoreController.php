<?php

namespace Fusion\Http\Controllers\API\Backups;

use Illuminate\Http\Request;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Http\Controllers\Controller;
use Fusion\Jobs\Backups\RestoreFromBackup;
use Spatie\Backup\BackupDestination\Backup;

class BackupRestoreController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  Backup $backup
     * @param  Request  $request
     * @return void
     */
    public function index(Backup $backup, Request $request)
    {
        if ($request->input('saveBackup')) {
            BackupRun::dispatch();
        }

        RestoreFromBackup::dispatch($backup);
    }
}
