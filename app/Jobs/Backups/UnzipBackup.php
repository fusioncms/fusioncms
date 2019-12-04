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

use Storage;
use Exception;
use ZipArchive;
use Illuminate\Bus\Queueable;
use Spatie\Backup\Tasks\Backup\Manifest;
use Spatie\Backup\BackupDestination\Backup;
use Illuminate\Foundation\Bus\Dispatchable;
use Spatie\TemporaryDirectory\TemporaryDirectory;

class UnzipBackup
{
    use Dispatchable, Queueable;

    /** 
     * @var TemporaryDirectory
     */
    protected $tempDirectory;

    /**
     * @var string
     */
    protected $backupPath;

    /** 
     * @var ZipArchive
     */
    protected $zipFile;

    /**
     * Constructor.
     *
     * @param TemporaryDirectory $tempDirectory
     * @param string             $backupPath
     */
    public function __construct(TemporaryDirectory $tempDirectory, string $backupPath)
    {
    	$this->tempDirectory = $tempDirectory;
    	$this->backupPath    = $backupPath;
    	$this->zipFile       = new ZipArchive;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
		if ($this->zipFile->open($this->backupPath) === true) {
			// Create restoration manifest..
			$this->createRestorationManifest();

			// Extract files from zip to temp folder..
			$this->zipFile->extractTo($this->tempDirectory->path());
			$this->zipFile->close();
		} else {
			throw new Exception('Unable to locate and unzip backup file.');
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
     * Create restoration manifest.
     * 
     * @return Manifest
     */
    private function createRestorationManifest(): Manifest
    {
    	return Manifest::create($this->tempDirectory->path('manifest.txt'))
			->addFiles($this->filesToRestore());
    }

    /**
     * Return listing of files within the zip archive.
     * 
     * @return array
     */
    private function filesToRestore(): array
    {
    	$files = [];

		for ($i = 0; $i < $this->zipFile->numFiles; ++$i) {
			$files[] = 	$this->zipFile->getNameIndex($i);
		}

		return $files;
    }
}