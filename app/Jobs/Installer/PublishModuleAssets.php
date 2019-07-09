<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Installer;

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
