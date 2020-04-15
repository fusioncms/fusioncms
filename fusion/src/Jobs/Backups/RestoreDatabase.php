<?php

namespace Fusion\Jobs\Backups;

use DB;
use Log;
use Exception;
use Illuminate\Bus\Queueable;
use Symfony\Component\Process\Process;
use Spatie\Backup\Tasks\Backup\Manifest;
use Illuminate\Foundation\Bus\Dispatchable;
use Fusion\Events\Backups\DatabaseRestoreFailed;
use Fusion\Events\Backups\DatabaseRestoreSuccessful;
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
     * @throws Exception
     * @return void
     */
    public function handle()
    {
        try {
        	if ($dbDumpPath = $this->fetchDBDump()) {
                if (config('database.default') == 'mysql') {
                    $this->restoreFromMySqlFile($dbDumpPath);
                } elseif (config('database.default') == 'sqlite') {
                    $this->restoreFromSqliteFile($dbDumpPath);
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
     * Run command to restore mysql file.
     *
     * @throws ProcessFailedException
     * @return boolean
     */
    private function restoreFromMySqlFile($dbDumpPath)
    {
        $dbUser = config('database.connections.mysql.username');
        $dbPass = config('database.connections.mysql.password');
        $dbHost = config('database.connections.mysql.host');
        $dbName = config('database.connections.mysql.database');

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

        $process = new Process($command);
        $process->run();

        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        return true;
    }

    /**
     * Run command to restore sqlite file.
     *
     * @throws ProcessFailedException
     * @return boolean
     */
    private function restoreFromSqliteFile($dbDumpPath)
    {
        $dbName  = config('database.connections.' . $default . '.database');
        $command = "sqlite3 {$dbName} < {$dbDumpPath}";

        $process = new Process($command);
        $process->run();

        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        return true;
    }
}