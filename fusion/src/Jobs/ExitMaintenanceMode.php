<?php


namespace Fusion\Jobs;

use Artisan;

class ExitMaintenanceMode
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        return Artisan::call('up');
    }
}
