<?php

namespace Fusion\Http\Controllers\API;

use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\StructureResource;

class StructureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $structures = collect(config('fusion.structures'))->map(function($structure, $handle) {
            return [
                'name'   => $structure,
                'handle' => $handle,
            ];
        })->sortBy('name')->values();

        return StructureResource::collection($structures);
    }
}
