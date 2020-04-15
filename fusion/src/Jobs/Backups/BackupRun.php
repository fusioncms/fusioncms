<?php

namespace Fusion\Jobs\Backups;

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
        $this->setup();

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

        $this->tearDown();
    }

    /**
     * Setup procedures before backup is run.
     *
     * @return void
     */
    private function setup()
    {
        // Create file-manager folder if it doesn't exist..
        // TODO: maybe create this upon fusion:install?
        if (! Storage::disk('public')->exists('files')) {
            Storage::disk('public')->makeDirectory('files');
        }

        // Store .env variables for backing up..
        Storage::disk('temp')->put('env.json',
            collect(config('backup.backup.source.env'))
                ->mapWithKeys(function($item) {
                    return [$item => env($item)];
                })->toJson()
        );
    }

    /**
     * Tear down procedures after backup is run.
     *
     * @return void
     */
    private function tearDown()
    {
        Storage::disk('temp')->delete('env.json');
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
