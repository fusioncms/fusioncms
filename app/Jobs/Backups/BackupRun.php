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

use Log;
use Artisan;
use Storage;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;

class BackupRun
{
    use Dispatchable, Queueable;

    /**
     * @var string
     */
    protected $disk;

    /**
     * Constructor.
     * 
     * @param string $disk
     */
    public function __construct($disk = null)
    {
        $this->disk = $disk;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Create file-manager folder if it doesn't exist..
        if (!Storage::disk('public')->exists('files')){
            Storage::disk('public')->makeDirectory('files');
        }

        // Clean existing backup collection..
        Artisan::call('backup:clean', [
            '--no-interaction' => true,
            '--quiet'          => true
        ]);

        // Run backup procedre..
        Artisan::call('backup:run', [
            '--only-to-disk'   => $this->disk,
            '--no-interaction' => true,
            '--quiet'          => true
        ]);
    }

    /**
     * The job failed to process.
     *
     * @param  Exception  $exception
     * @return void
     */
    public function failed(Exception $exception)
    {
        Log::error('There was an error trying to backup FusionCMS: ', $exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
