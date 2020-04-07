<?php


namespace Fusion\Jobs\Upgrader;

use Artisan;

class UpdateDatabase
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('module:migrate', ['--force' => true]);
    }
}
