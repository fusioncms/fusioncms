<?php

namespace Fusion\Listeners;

use Fusion\Jobs\LoadNavigation;
use Caffeinated\Modules\Facades\Module;

class FusionServed
{
    /**
     * Handle the event.
     *
     * @param  Verified $verified
     * @return void
     */
    public function handle()
    {
    	LoadNavigation::dispatchNow();

        Module::enabled()->each(function ($module) {
            if (class_exists("Modules\\{$module['basename']}\\Jobs\\LoadNavigation")) {
                resolve("Modules\\{$module['basename']}\\Jobs\\LoadNavigation")::dispatchNow();
            }
        });
    }
}