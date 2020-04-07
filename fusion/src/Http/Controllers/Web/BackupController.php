<?php

namespace Fusion\Http\Controllers\Web;

use Storage;
use Fusion\Http\Controllers\Controller;
use Spatie\Backup\BackupDestination\Backup;

class BackupController extends Controller
{
    public function index(Backup $backup)
    {
        $this->authorize('backups.download');

        if (! $backup->exists()) {
            abort('404', 'File does not exist.');
        }

        return Storage::disk('public')->response($backup->path());
    }
}