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

use Artisan;

class CreateStorageLink
{
    public function handle()
    {
        @unlink(public_path('storage'));

        Artisan::call('storage:link');
    }
}
