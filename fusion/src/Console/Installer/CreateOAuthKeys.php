<?php

namespace Fusion\Console\Installer;

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
