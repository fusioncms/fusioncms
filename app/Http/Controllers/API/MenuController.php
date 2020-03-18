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

use App\Models\Menu;
use Illuminate\Http\Request;
use App\Http\Requests\MenuRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\MenuResource;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Support\Collection
     */
    public function index(Request $request)
    {
        $this->authorize('menus.show');

        $menus = Menu::orderBy('name')->paginate(25);

        return MenuResource::collection($menus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \App\Http\Responses\MenuResource
     */
    public function show(Menu $menu)
    {
        $this->authorize('menus.show');

        return new MenuResource($menu);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\MenuRequest  $request
     * @return \App\Http\Responses\MenuResource
     */
    public function store(MenuRequest $request)
    {
        $menu = Menu::create($request->validated());

        return new MenuResource($menu);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\MenuRequest  $request
     * @param  \App\Models\Menu  $menu
     * @return \App\Http\Responses\MenuResource
     */
    public function update(MenuRequest $request, Menu $menu)
    {
        $menu->update($request->validated());

        return new MenuResource($menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menu  $menu
     * @return void
     */
    public function destroy(Menu $menu)
    {
        $this->authorize('menus.delete');

        $menu->delete();
    }
}
