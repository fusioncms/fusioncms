<?php


namespace Fusion\Jobs\Upgrader;

use File;

class CopyFiles
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $directories      = File::directories(storage_path('temp/upgrade'));
        $upgradeDirectory = $directories[0];

        File::copyDirectory($upgradeDirectory, base_path());
    }
}
