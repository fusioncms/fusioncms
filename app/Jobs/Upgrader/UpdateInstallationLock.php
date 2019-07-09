<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Upgrader;

use File;

class UpdateInstallationLock
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $versions = File::files(base_path('bootstrap/releases'));

        usort($versions, 'version_compare');

        $contents = pathinfo(end($versions), PATHINFO_FILENAME);

        File::put(base_path('.installed'), $contents);
    }
}
