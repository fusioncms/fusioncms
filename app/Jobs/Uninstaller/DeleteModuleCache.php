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

class DeleteModuleCache
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $path = storage_path('app/modules.json');

        File::delete($path);
    }
}
