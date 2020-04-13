<?php

namespace Fusion\Console;

use Artisan;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Helper\ProgressBar;

class SyncCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync FusionCMS themes, modules and settings';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            dispatch(new \Fusion\Console\Actions\SyncSettings);
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

            $this->comment("\n\nUh oh! The following error was encountered during the sync process:\n");
            $this->error($exception->getMessage());
            $this->comment("\nPlease check the error logs for more information.");

            return;
        }

        return $this->info("\nFusionCMS is now in sync.");
    }
}