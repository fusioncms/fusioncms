<?php

namespace Fusion\Console\Installer;

use Artisan;

class GenerateEncryptionKey
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        return Artisan::call('key:generate');
    }
}
