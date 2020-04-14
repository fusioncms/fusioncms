<?php

namespace Fusion\Console\Installer;

use Artisan;
use Caffeinated\Modules\Facades\Module;

class PublishModuleAssets
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Module::all()->each(function ($module, $key) {
            Artisan::call('vendor:publish', ['--tag' => ["module-{$module['slug']}"], '--force' => true]);
        });
    }
}
