<?php


namespace Fusion\Jobs\Upgrader;

use Artisan;

class ClearCache
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('cache:clear');
        Artisan::call('view:clear');
    }
}
