<?php

namespace Fusion\Http\Controllers\API\Modules;

use Fusion\Models\Extension;
use Illuminate\Http\Request;
use Fusion\Concerns\HasExtension;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;

class ActionController extends Controller
{
    /**
     * Request for new module installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return void
     */
    public function install(Request $request, Collection $module)
    {
        // --
        // Register module..
        Module::enable($module->get('slug'));
        Module::set($module->get('slug') . '::installed', true);
        Module::optimize();

        // --
        // Run migrations..
        Artisan::call('module:migrate', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        // --
        // Sync module (e.g. assets, settings, extensions)
        Artisan::call('fusion:sync --module=' . $module->get('slug'));
    }

    /**
     * Update module installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return void
     */
    public function update(Request $request, Collection $module)
    {
        // --
        // Run migrations..
        Artisan::call('module:migrate', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        // --
        // Sync module (e.g. assets, settings, extensions)
        Artisan::call('fusion:sync --module=' . $module->get('slug'));
    }

    /**
     * Seed module installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return void
     */
    public function seed(Request $request, Collection $module)
    {
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
        Module::disable($module->get('slug'));
        Module::set($module->get('slug') . '::installed', false);
        
        // --
        // Clean up extension records..
        $files = File::files(base_path("modules/{$module->get('basename')}/src/Models"));

        foreach ($files as $file) {
            $name   = basename($file->getBaseName(), '.php');
            $model  = resolve("Modules\\{$module['basename']}\\Models\\{$name}");
            $traits = class_uses($model);

            if (in_array(HasExtension::class, $traits)) {
                Extension::where('handle', $model->getTable())->first()->delete();
            }
        }

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
        Module::optimize();

        // --
        // Re-sync settings..
        dispatch(new \Fusion\Console\Actions\SyncSettings);
    }
}
