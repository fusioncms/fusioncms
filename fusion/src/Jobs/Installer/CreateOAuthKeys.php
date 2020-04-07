<?php


namespace Fusion\Jobs\Installer;

use Artisan;

class CreateOAuthKeys
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        return Artisan::call('passport:keys');
    }
}
