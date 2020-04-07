<?php


namespace Fusion\Jobs;

use Artisan;

class RunUpkeep
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        return Artisan::call('upkeep');
    }
}
