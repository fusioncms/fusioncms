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
use App\Models\Permission;

class CreatePermissions
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $modules = Module::all();

        foreach ($modules as $key => $module) {
            if (isset($module['permissions'])) {
                $this->createPermissions($module['permissions']);
            }
        }
    }

    protected function createPermissions($permissions)
    {
        foreach ($permissions as $permission => $details) {
            $data = [
                'name'        => $details['name'],
                'handle'      => $permission,
                'description' => $details['description'],
            ];

            Permission::create($data);
        }
    }
}
