<?php


namespace Fusion\Jobs\Uninstaller;

use File;

class DeleteModuleCache
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $path = storage_path('app/modules.json');

        File::delete($path);
    }
}
