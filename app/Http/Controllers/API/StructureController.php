<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\StructureResource;

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
        $structures = collect(config('fusioncms.structures'))->map(function($structure, $handle) {
            return [
                'name'   => $structure,
                'handle' => $handle,
            ];
        })->sortBy('name')->values();

        return StructureResource::collection($structures);
    }
}
