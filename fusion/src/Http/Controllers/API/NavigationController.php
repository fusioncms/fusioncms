<?php

namespace Fusion\Http\Controllers\API;

use Menu;
use Fusion\Events\ServingFusion;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\NavigationResource;

class NavigationController extends Controller
{
    /**
     * Get all admin navigation menu items.
     *
     * @return \Fusion\Http\Resources\NavigationResource
     */
    public function index()
    {
        event(ServingFusion::class);

        $roots = Menu::get('admin')->roots();

        $links = $this->extractLinks($roots);

        return new NavigationResource($links);
    }

    /**
     * Extract links and their children from menu collection.
     *
     * @param  \Caffeinated\Menus\MenuItem  $node
     * @return \Illuminate\Support\Collection
     */
    protected function extractLinks($node)
    {
        $linkCollection = collect();

        foreach ($node as $item) {
            if ($item->hasChildren()) {
                $linkCollection->push([
                    'title'    => $item->title,
                    'to'       => '#',
                    'icon'     => $item->icon,
                    'children' => $this->extractLinks($item->children()),
                ]);
            } else {
                $linkCollection->push([
                    'title'    => $item->title,
                    'to'       => $item->to ?? '#',
                    'icon'     => $item->icon,
                    'divider'  => count($item->divider) ? true : false,
                ]);
            }
        }

        return $linkCollection;
    }
}
