<?php

namespace Fusion\Console\Uninstaller;

use File;
use Storage;

class DeleteUserFiles
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // Remove all files created in File Manager
        File::deleteDirectory(Storage::disk('public')->path('files'));

        // Remove .cache folder created by Glide
        File::deleteDirectory(Storage::disk('public')->path('.cache'));
    }
}
