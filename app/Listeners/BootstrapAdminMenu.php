<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Listeners;

use Menu;
use App\Models\Matrix;
use App\Models\Taxonomy;
use App\Events\ServingFusion;

class BootstrapAdminMenu
{
    /**
     * Handle the event.
     *
     * @param  Verified $verified
     * @return void
     */
    public function handle()
    {
        $matrices   = Matrix::where('sidebar', true)->orderBy('name')->get();
        $taxonomies = Taxonomy::where('sidebar', true)->orderBy('name')->get();

        Menu::make('admin', function ($menu) use ($matrices, $taxonomies) {
            $menu->add('Dashboard')->data([
                'to'    => '/',
                'icon'  => 'grip-horizontal',
            ]);

            if ($matrices->count()) {
                $menu->add('Content')->divide();

                foreach ($matrices as $matrix) {
                    $menu->add($matrix->name)->data([
                        'to'   => $matrix->adminPath,
                        'icon' => $matrix->icon ?: 'pencil',
                    ]);
                }
            }

            if ($taxonomies->count()) {
                $menu->add('Organize')->divide();

                foreach ($taxonomies as $taxonomy) {
                    $menu->add($taxonomy->name)->data([
                        'to'   => $taxonomy->adminPath,
                        'icon' => $taxonomy->icon ?: 'tag',
                    ]);
                }
            }

            $menu->add('Tools')->divide();
            
            $menu->add('File Manager')->data([
                'to'   => '/files',
                'icon' => 'images',
            ]);
                
            $menu->add('Forms', '#')->data([
                'icon' => 'paper-plane',
            ]);
                        
            $menu->forms->add('All Forms')->data([
                'to' => '/',
            ]);

            $menu->forms->add('Inbox')->data([
                'to' => '/',
            ]);

            $menu->add('SEO', '#')->data([
                'icon'  => 'chart-bar',
            ]);

            $menu->seo->add('Insight')->data([
                'to'    => '/insight',
            ]);

            $menu->add('System')->divide();

            $menu->add('Users', '#')->data([
                'icon'  => 'users',
            ]);

            $menu->users->add('All Users')->data([
                'to' => '/users',
            ]);

            $menu->users->add('Roles')->data([
                'to' => '/roles',
            ]);

            $menu->users->add('Permissions')->data([
                'to' => '/permissions',
            ]);

            $menu->add('Matrix')->data([
                'to'   => '/matrices',
                'icon' => 'chart-network',
            ]);

            $menu->add('Taxonomy')->data([
                'to'   => '/taxonomies',
                'icon' => 'sitemap',
            ]);

            $menu->add('Fieldsets')->data([
                'to'   => '/fieldsets',
                'icon' => 'ballot',
            ]);

            $menu->add('Theme')->data([
                'to'   => '/themes/settings',
                'icon' => 'paint-roller',
            ]);

            $menu->add('Settings')->data([
                'to'   => '/settings',
                'icon' => 'cog',
            ]);

            if (app()->isLocal()) {
                $menu->add('Telescope')->data([
                    'to' => '/telescope',
                    'target' => '_blank',
                    'icon' => 'moon-stars'
                ]);
            }            

            // $menu->add('Playground')->data([
            //     'to'   => '/playground',
            //     'icon' => 'robot'
            // ]);
        });
    }
}
