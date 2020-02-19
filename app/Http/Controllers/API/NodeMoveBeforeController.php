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
use App\Http\Resources\NodeResource;
use App\Services\Builders\Menu as Builder;

class NodeMoveBeforeController extends Controller
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

        $move   = $model->find($request->move);
        $before = $model->find($request->before);

        $order = $before->orderBefore();

        $move->order = $order;
        $move->save();

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
                // 'link' => 'taxonomies/'.$menu->handle.'//edit/' . $node->id,
            ])
            ->log('Updated '.strtolower(Str::singular($menu->name)).' menu node ordering');
    }
}
