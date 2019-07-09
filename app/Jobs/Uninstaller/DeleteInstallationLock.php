<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Uninstaller;

use File;

class DeleteInstallationLock
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $path = base_path('.installed');

        File::delete($path);
    }
}
