<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteModelFiles
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        File::delete(glob(app_path('Models/Collections') . '/*.php'));
        File::delete(glob(app_path('Models/Forms') . '/*.php'));
        File::delete(glob(app_path('Models/Menus') . '/*.php'));
        File::delete(glob(app_path('Models/Pages') . '/*.php'));
        File::delete(glob(app_path('Models/Taxonomies') . '/*.php'));
    }
}
