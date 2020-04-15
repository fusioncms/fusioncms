<?php

namespace Fusion\Console\Actions;

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
