<?php

namespace Fusion\Console\Installer;

use Artisan;

class CreateStorageLink
{
    public function handle()
    {
        @unlink(public_path('storage'));

        Artisan::call('storage:link');
    }
}
