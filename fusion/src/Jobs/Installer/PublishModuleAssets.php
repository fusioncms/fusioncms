<?php


namespace Fusion\Jobs\Installer;

use Module;
use Artisan;

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
