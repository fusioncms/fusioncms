<?php

namespace Fusion\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SyncSystemSettings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:settings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Keep FusionCMS System Settings up-to-date';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            dispatch(new \Fusion\Jobs\SyncSystemSettings);
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

            $this->comment("\n\nUh oh! The following error was encountered during the sync process:\n");
            $this->error($exception->getMessage());
            $this->comment("\nPlease check the error logs for more information.");

            return;
        }

        return $this->info("\nSettings have been successfully sync'd.");
    }
}
