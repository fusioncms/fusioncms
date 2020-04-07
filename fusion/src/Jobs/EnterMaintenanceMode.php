<?php


namespace Fusion\Jobs;

use Artisan;

class EnterMaintenanceMode
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        return Artisan::call('down');
    }
}
