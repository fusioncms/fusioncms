<?php

namespace Fusion\Console\Actions;

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
