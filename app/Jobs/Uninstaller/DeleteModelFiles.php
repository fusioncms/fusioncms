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
