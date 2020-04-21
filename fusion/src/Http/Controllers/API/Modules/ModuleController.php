<?php

namespace Fusion\Http\Controllers\API\Modules;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ModuleResource;

class ModuleController extends Controller
{
    /**
     * Display all resources.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function index(Request $request)
    {
        return ModuleResource::collection(Module::all()->values());
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function show(Request $request, Collection $module)
    {
        return new ModuleResource($module);
    }
}
