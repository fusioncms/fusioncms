<?php

namespace Fusion\Http\Controllers\API\Modules;

use File;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Artisan;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ModuleResource;

class InstallController extends Controller
{
    /**
     * Request for new module installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function install(Request $request, Collection $module)
    {
        // --
        // Register module..
        Module::enable($module->get('slug'));
        Module::set($module->get('slug') . '::installed', true);
        Module::optimize();

        // --
        // Sync module (e.g. assets, settings, extensions)
        Artisan::call('fusion:sync --module=' . $module->get('slug'));

        // --
        // Run migrations..
        Artisan::call('module:migrate', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]); 

        // --
        // Run seeders..
        Artisan::call('module:seed', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        return new ModuleResource($module);
    }

    /**
     * Update installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function update(Request $request, Collection $module)
    {
        // --
        // Sync module (e.g. assets, settings, extensions)
        Artisan::call('fusion:sync --module=' . $module->get('slug'));

        // --
        // Run migrations..
        Artisan::call('module:migrate', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        // --
        // Run seeders..
        Artisan::call('module:seed', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);
    }

    /**
     * Uninstall process.
     * 
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return void
     */
    public function uninstall(Request $request, Collection $module)
    {
        // --
        // Rollback migrations..
        Artisan::call('module:migrate:rollback', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        // --
        // File cleanup..
        File::delete(public_path("modules/{$module->get('slug')}"));
        File::delete(fusion_path("settings/modules/{$module->get('slug')}.php"));
        File::deleteDirectory(base_path("modules/{$module->get('basename')}"));
    
        // --
        // Unregister module..
        Module::disable($module->get('slug'));
        Module::set($module->get('slug') . '::installed', false);
        Module::optimize();
    }
}
