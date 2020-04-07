<?php


namespace Fusion\Jobs\Uninstaller;

use File;

class DeleteEnvironmentConfig
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        File::delete(base_path('.env'));
    }
}
