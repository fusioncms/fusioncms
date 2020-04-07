<?php


namespace Fusion\Jobs\Installer;

use Artisan;

class CreateStorageLink
{
    public function handle()
    {
        @unlink(public_path('storage'));

        Artisan::call('storage:link');
    }
}
