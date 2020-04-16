<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteFusionResources
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $path = public_path('vendor/fusion');

        File::deleteDirectory($path);
    }
}
