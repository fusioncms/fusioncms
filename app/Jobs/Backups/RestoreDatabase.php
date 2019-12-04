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
use Exception;
use Illuminate\Bus\Queueable;
use Symfony\Component\Process\Process;
use Spatie\Backup\Tasks\Backup\Manifest;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Events\Backups\DatabaseRestoreFailed;
use App\Events\Backups\DatabaseRestoreSuccessful;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Symfony\Component\Process\Exception\ProcessFailedException;

class RestoreDatabase
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
        try {
        	if ($dbDumpPath = $this->fetchDBDump()) {
                $process = new Process(
                    $this->generateImportCommand($dbDumpPath)
                );

                $process->run();

                if (! $process->isSuccessful()) {
                    throw new ProcessFailedException($process);
                }

                event(new DatabaseRestoreSuccessful($dbDumpPath));
        	} else {
        		throw new Exception('Failed to locate database dump from backup.');
        	}
        } catch (Exception $exception) {
            event(new DatabaseRestoreFailed($exception, $dbDumpPath));

            Log::error('There was an error restoring database backup: ' . $exception->getMessage(), (array) $exception->getTrace()[0]);
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
	 * Fetch db-dump recorded in manifest file.
	 *
	 * @return string|boolean
	 */
	private function fetchDBDump()
	{
		foreach ($this->manifest->files() as $file) {
			if (pathinfo($file, PATHINFO_EXTENSION) == 'sql') {
				return $this->tempDirectory->path($file);
			}
		}

		return false;
	}

    /**
     * [generateImportCommand description]
     * @param  string $dbDumpPath [description]
     * @return [type]             [description]
     */
    private function generateImportCommand(string $dbDumpPath)
    {
        $default = config('database.default');
        $dbUser  = config('database.connections.' . $default . '.username');
        $dbPass  = config('database.connections.' . $default . '.password');
        $dbHost  = config('database.connections.' . $default . '.host');
        $dbName  = config('database.connections.' . $default . '.database');

        switch ($default)
        {
            case 'mysql':
                $tempFile = tmpfile();
                fwrite($tempFile, implode(PHP_EOL, [
                    '[client]',
                    "user = '{$dbUser}'",
                    "password = '{$dbPass}'",
                    "host = '{$dbHost}'",
                ]));

                $command = sprintf('mysql --defaults-extra-file="%s" %s < %s',
                    stream_get_meta_data($tempFile)['uri'],
                    escapeshellarg($dbName),
                    escapeshellarg($dbDumpPath)
                );
                break;
            case 'sqlite':
                $command = "sqlite3 {$dbName} < {$dbDumpPath}";
                break;
        }

        return $command;
    }
}