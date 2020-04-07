<?php


namespace Fusion\Jobs\Upgrader;

use Artisan;

class OptimizeModules
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('module:optimize');
    }
}
