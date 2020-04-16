<?php

namespace Fusion\Console\Installer;

use Artisan;

class PublishFusionResources
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('fusion:publish');
    }
}
