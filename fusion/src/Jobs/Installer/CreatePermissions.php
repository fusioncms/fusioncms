<?php


namespace Fusion\Jobs\Installer;

use Module;
use Fusion\Models\Permission;

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
