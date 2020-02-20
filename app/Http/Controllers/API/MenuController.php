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
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\MenuResource;

class MenuController extends Controller
{
    /**
     * Validation rules used for create and update
     * actions.
     *
     * @var array
     */
    protected $rules = [
        'name'        => 'required|regex:/^[A-z]/i',
        'handle'      => 'required',
        'description' => 'sometimes',
    ];

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu)
    {
        $this->authorize('menus.show');

        return new MenuResource($menu);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('menus.create');

        $attributes = collect($request->validate($this->rules));

        $menu = Menu::create($attributes->all());

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'menus/'.$menu->id.'/edit',
            ])
            ->log('Created menu (:subject.name)');

        return new MenuResource($menu);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Menu $menu)
    {
        $this->authorize('menus.update');

        $attributes = collect($request->validate($this->rules));

        $menu->update($attributes->all());

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'menus/'.$menu->id.'/edit',
            ])
            ->log('Updated menu (:subject.name)');

        return new MenuResource($menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu)
    {
        $this->authorize('menus.delete');

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
            ])
            ->log('Deleted menu (:subject.name)');

        $menu->delete();
    }
}
