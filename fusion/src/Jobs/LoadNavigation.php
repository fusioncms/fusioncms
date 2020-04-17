<?php

namespace Fusion\Jobs;

use Menu;
use Fusion\Models\Matrix;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Foundation\Bus\Dispatchable;

class LoadNavigation
{
    use Dispatchable;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $matrices   = Matrix::where('sidebar', true)->where('parent_id', 0)->orderBy('name')->get();
        $taxonomies = Taxonomy::where('sidebar', true)->orderBy('name')->get();

        Menu::make('admin', function ($menu) use ($matrices, $taxonomies) {
            $menu->add('Dashboard')->data([
                'to'    => '/',
                'icon'  => 'grip-horizontal',
            ]);

            $menu->add('File Manager')->data([
                'to'   => '/files',
                'icon' => 'images',
            ]);

            $menu->add('Inbox')->data([
                'to' => '/inbox',
                'icon' => 'inbox',
            ]);

            $menu->add('SEO', '#')->data([
                'icon'  => 'chart-bar',
            ]);

            $menu->seo->add('Insight')->data([
                'to'    => '/insight',
            ]);

            if ($matrices->count()) {
                $menu->add('Content')->divide();

                foreach ($matrices as $matrix) {
                    if ($matrix->has('children') and $matrix->children->count()) {
                        $menu->add($matrix->name, '#')->data([
                            'icon'  => $matrix->icon ?: 'pencil-alt',
                        ]);

                        $menu->{Str::camel($matrix->name)}->add($matrix->reference_plural, '#')->data([
                            'to' => $matrix->adminPath
                        ]);

                        foreach ($matrix->children as $child) {
                            $menu->{Str::camel($matrix->name)}->add(($child->type == 'page' ? $child->reference_singular : $child->reference_plural))->data([
                                'to' => $child->adminPath
                            ]);
                        }
                    } else {
                        $menu->add($matrix->name)->data([
                            'to'   => $matrix->adminPath,
                            'icon' => $matrix->icon ?: 'pencil-alt',
                        ]);
                    }

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

            $menu->add('System')->divide();

            $menu->add('Appearance', '#')->data([
                'icon'  => 'fill-drip',
            ]);

            $menu->appearance->add('Menus')->data([
                'to'   => '/menus',
                'icon' => 'anchor',
            ]);

            $menu->appearance->add('Theme')->data([
                'to'   => '/themes/settings',
                'icon' => 'paint-roller',
            ]);

            $menu->add('Configure', '#')->data([
                'icon'  => 'sliders-h',
            ]);

            $menu->configure->add('Fieldsets')->data([
                'to'   => '/fieldsets',
                'icon' => 'list',
            ]);

            $menu->configure->add('Forms')->data([
                'to' => '/forms',
                'icon' => 'paper-plane',
            ]);

            $menu->configure->add('Mailables')->data([
                'to'   => '/mailables',
                'icon' => 'mail-bulk',
            ]);

            $menu->configure->add('Matrix')->data([
                'to'   => '/matrices',
                'icon' => 'hashtag',
            ]);

            $menu->configure->add('Extensions')->data([
                'to'   => '/extensions',
                'icon' => 'seedling',
            ]);

            $menu->configure->add('Taxonomy')->data([
                'to'   => '/taxonomies',
                'icon' => 'sitemap',
            ]);

            $menu->add('Settings')->data([
                'to'   => '/settings',
                'icon' => 'cog',
            ]);

            $menu->add('Tools', '#')->data([
                'icon'  => 'tools',
            ]);

            $menu->tools->add('Backups')->data([
                'to'   => '/backups',
                'icon' => 'save',
            ]);

            // $menu->tools->add('Import')->data([
            //     'to'   => '/importer',
            //     'icon' => 'ship',
            // ]);

            $menu->tools->add('Logs')->data([
                'to'   => '/logs',
                'icon' => 'bug'
            ]);

            if (app()->isLocal()) {
                $menu->tools->add('Telescope')->data([
                    'to' => '/telescope',
                    'target' => '_blank',
                    'icon' => 'satellite'
                ]);
            }

            $menu->add('Users', '#')->data([
                'icon'  => 'users',
            ]);

            $menu->users->add('Users')->data([
                'to' => '/users',
            ]);

            $menu->users->add('Roles')->data([
                'to' => '/roles',
            ]);

            $menu->users->add('Permissions')->data([
                'to' => '/permissions',
            ]);

            if (app()->isLocal()) {
                $menu->add('Styleguide')->data([
                    'to'   => '/styleguide',
                    'icon' => 'swatchbook',
                ]);
            }
        });
    }
}
