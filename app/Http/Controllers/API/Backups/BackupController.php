<?php

namespace App\Http\Controllers\API\Backups;

use Storage;
use Illuminate\Http\Request;
use App\Jobs\Backups\BackupRun;
use App\Http\Controllers\Controller;
use App\Http\Resources\BackupResource;
use Spatie\Backup\BackupDestination\Backup;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $this->authorize('backups.show');

        return new BackupResource([]);
    }

    /**
     * Create new backup to be saved on disk.
     *
     * @param  Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $this->authorize('backups.run');

        BackupRun::dispatch();
    }

    /**
     * Remove the specified backup from disk.
     *
     * @param  Request $request
     * @return void
     */
    public function delete(Backup $backup)
    {
        $this->authorize('backups.delete');
        
        $backup->delete();
    }
}
