<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Backups;

use DB;
use Log;
use Storage;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Spatie\Backup\BackupDestination\Backup;
use Spatie\TemporaryDirectory\TemporaryDirectory;

class RestoreFromBackup
{
    use Dispatchable, Queueable;

    /**
     * Backup file to restore from.
     * 
     * @var Backup
     */
    protected $backup;

    /**
     * Constructor.
     * 
     * @param Backup $backup
     */
    public function __construct(Backup $backup)
    {
        $this->backup = $backup;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $backupPath       = Storage::disk('public')->path($this->backup->path());
        $extractionPath   = storage_path('app/restore-temp');
        $restoreDirectory = (new TemporaryDirectory($extractionPath))
                ->name('temp')
                ->force()
                ->create()
                ->empty();

        $jobs = [
            'Enter maintenance mode...'       => new \App\Jobs\EnterMaintenanceMode,
            'Unzip backup for processing....' => new \App\Jobs\Backups\UnzipBackup($restoreDirectory, $backupPath),
            'Restore database from backup...' => new \App\Jobs\Backups\RestoreDatabase($restoreDirectory),
            'Restore files from backup...'    => new \App\Jobs\Backups\RestoreFiles($restoreDirectory),
            'Exit maintenance mode...'        => new \App\Jobs\ExitMaintenanceMode,
        ];
        
        foreach ($jobs as $message => $instance) {
            try {
                dispatch($instance);
            } catch (Exception $exception) {
                $restoreDirectory->delete();
                
                throw new Exception('There was an error trying to restore from a backup: ' . $exception->getMessage());
            }
        }
        
        $restoreDirectory->delete();
    }

    /**
     * The job failed to process.
     *
     * @param  Exception  $exception
     * @return void
     */
    public function failed(Exception $exception)
    {
        Log::error('There was an error trying to restore from a backup: ', $exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
