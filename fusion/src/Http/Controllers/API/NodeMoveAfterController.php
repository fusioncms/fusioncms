<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Menu;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\NodeResource;
use Fusion\Services\Builders\Menu as Builder;

class NodeMoveAfterController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $menu
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $menu)
    {
        $this->authorize('node.update');

        $menu   = Menu::find($menu)->firstOrFail();
        $model  = (new Builder($menu->handle))->make();

        $move  = $model->find($request->move);
        $after = $model->find($request->after);

        $order = $after->orderAfter();

        $move->order = $order;
        $move->save();

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'menus/'.$menu->id.'/nodes'
            ])
            ->log('Updated '.strtolower(Str::singular($menu->name)).' menu node ordering');
    }
}
