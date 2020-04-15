<?php

namespace Fusion\Jobs\Backups;

use Log;
use File;
use Storage;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;

class RestoreEnvVariables
{
    use Dispatchable, Queueable;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (Storage::disk('temp')->exists('env.json')) {
            // Setup..
            $envContents  = File::get(app()->environmentFilePath());
            $varsContents = Storage::disk('temp')->get('env.json');
            $variables    = collect(json_decode($varsContents));

            // Perform surgery..
            $variables->each(function($value, $key) use (&$envContents) {
                $envContents = preg_replace("/^({$key})=([^\r\n]*)$/m", "$1={$value}", $envContents);
            });

            // Override .env file with updated variables
            File::put(app()->environmentFilePath(), $envContents);

            // Dispose of temp env variables file
            Storage::disk('temp')->delete('env.json');
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
}