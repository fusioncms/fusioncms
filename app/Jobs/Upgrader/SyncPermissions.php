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

use Module;
use Modules\Modules\Contracts\ModuleRepository;

class SyncPermissions
{
    /**
     * Create a new SyncPermissions instance.
     */
    public function __construct()
    {
        $this->module = app()->make(ModuleRepository::class);
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $modules = Module::all();

        foreach ($modules as $module) {
            if (isset($module['permissions'])) {
                $this->module->syncPermissions($module);
            }
        }
    }
}
