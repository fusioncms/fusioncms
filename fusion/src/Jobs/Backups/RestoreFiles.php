<?php

namespace Fusion\Jobs\Backups;

use DB;
use Log;
use File;
use Exception;
use Illuminate\Bus\Queueable;
use Symfony\Component\Process\Process;
use Spatie\Backup\Tasks\Backup\Manifest;
use Illuminate\Foundation\Bus\Dispatchable;
use Fusion\Events\Backups\FileRestoreFailed;
use Fusion\Events\Backups\FileRestoreSuccessful;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Symfony\Component\Process\Exception\ProcessFailedException;

class RestoreFiles
{
    use Dispatchable, Queueable;

    /**
     * @var TemporaryDirectory
     */
    protected $tempDirectory;

    /**
     * @var Manifest
     */
    protected $manifest;

	/**
     * Constructor.
     *
     * @param Backup $backup
     */
    public function __construct(TemporaryDirectory $tempDirectory)
    {
        $this->tempDirectory = $tempDirectory;
        $this->manifest      = new Manifest($tempDirectory->path('manifest.txt'));
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $includes    = config('backup.backup.source.files.include');
        $filesToCopy = $this->fetchFileToRestore();

        try {
            // Clean out old files..
            foreach ($includes as $include) {
                if (File::isDirectory($include)) {
                    File::cleanDirectory($include);
                } else {
                    File::delete($include);
                }
            }

            // Restore backed up files..
            foreach ($filesToCopy as $fileToCopy) {
                File::copy($fileToCopy['path'], $fileToCopy['target']);
            }

            event(new FileRestoreSuccessful($filesToCopy));
        } catch (Exception $exception) {
            event(new FileRestoreFailed($exception, $filesToCopy));

            Log::error('There was an error restoring files in backup: ' . $exception->getMessage(), (array) $exception->getTrace()[0]);
        }
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

	/**
	 * Fetch all files recorded in manifest file.
	 *
	 * @return array
	 */
	private function fetchFileToRestore()
	{
        $files = [];

		foreach ($this->manifest->files() as $file) {
			if (pathinfo($file, PATHINFO_EXTENSION) !== 'sql') {
                $files[] = [
                    'path'   => $this->tempDirectory->path($file),
                    'target' => '/' . $file
                ];
            }
		}

		return $files;
	}
}