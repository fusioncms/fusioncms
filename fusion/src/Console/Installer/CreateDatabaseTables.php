<?php

namespace Fusion\Console\Installer;

use Artisan;

class CreateDatabaseTables
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('migrate', ['--force' => true]);
    }
}
