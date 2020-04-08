<?php

namespace Fusion\Console\Installer;

use Fusion\Models\Permission;
use Caffeinated\Modules\Facades\Module;
use Caffeinated\Shinobi\Facades\Shinobi;

class CreatePermissions
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // Access

        Shinobi::permission()->create([
            'name' => 'Access Admin Control Panel',
            'slug' => 'access.admin',
        ]);

        // Users

        Shinobi::permission()->create([
            'name' => 'Show Users',
            'slug' => 'users.show',
        ]);

        Shinobi::permission()->create([
            'name' => 'Create Users',
            'slug' => 'users.create',
        ]);

        Shinobi::permission()->create([
            'name' => 'Update Users',
            'slug' => 'users.update',
        ]);

        Shinobi::permission()->create([
            'name' => 'Delete Users',
            'slug' => 'users.delete',
        ]);

        Shinobi::permission()->create([
            'name' => 'Show Roles',
            'slug' => 'roles.show',
        ]);

        Shinobi::permission()->create([
            'name' => 'Create Roles',
            'slug' => 'roles.create',
        ]);

        Shinobi::permission()->create([
            'name' => 'Update Roles',
            'slug' => 'roles.update',
        ]);

        Shinobi::permission()->create([
            'name' => 'Delete Roles',
            'slug' => 'roles.delete',
        ]);

        // Matrix

        Shinobi::permission()->create([
            'name' => 'Show Matrices',
            'slug' => 'matrices.show',
        ]);

        Shinobi::permission()->create([
            'name' => 'Create Matrices',
            'slug' => 'matrices.create',
        ]);

        Shinobi::permission()->create([
            'name' => 'Update Matrices',
            'slug' => 'matrices.update',
        ]);

        Shinobi::permission()->create([
            'name' => 'Delete Matrices',
            'slug' => 'matrices.delete',
        ]);

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
