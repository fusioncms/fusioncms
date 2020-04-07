<?php


namespace Fusion\Jobs\Upgrader;

use Module;
use Modules\Modules\Contracts\ModuleRepository;

class SyncSettings
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
            if (isset($module['settings'])) {
                $this->module->syncSettings($module);
            }
        }
    }
}
