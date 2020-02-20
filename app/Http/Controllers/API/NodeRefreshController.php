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

class NodeRefreshController extends Controller
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

        $menu = Menu::find($menu)->firstOrFail();

        $menu->nodes->each(function($node, $index) {
            $node->order = $index + 1;
            $node->save();
        });

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'menus/'.$menu->id.'/nodes'
            ])
            ->log('Refreshed '.strtolower(Str::singular($menu->name)).' menu node ordering');
    }
}
