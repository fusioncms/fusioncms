<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Facades\Shinobi;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
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
    }
}
