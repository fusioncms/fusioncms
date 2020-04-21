<?php

namespace Fusion\Http\Controllers\API\Modules;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ModuleResource;

class StatusController extends Controller
{
    /**
     * Enable module.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return Redirect|void
     */
    public function enable(Request $request, Collection $module)
    {
        Module::enable($module->get('slug'));

        return new ModuleResource($module);
    }

    /**
     * Disable module.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return void
     */
    public function disable(Request $request, Collection $module)
    {
        Module::disable($module->get('slug'));

        return new ModuleResource($module);
    }
}
