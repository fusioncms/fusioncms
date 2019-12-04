<?php

namespace App\Http\Controllers\API\Backups;

use Illuminate\Http\Request;
use App\Jobs\Backups\BackupRun;
use App\Http\Controllers\Controller;
use App\Jobs\Backups\RestoreFromBackup;
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
    public function __invoke(Backup $backup, Request $request)
    {
        if ($request->input('saveBackup')) {
            BackupRun::withChain([
                new RestoreFromBackup($backup)
            ])->dispatch();
        } else {
            RestoreFromBackup::dispatch($backup);
        }
    }
}
