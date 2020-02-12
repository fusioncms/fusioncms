<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use App\Models\Menu as MenuModel;

if (! function_exists('menu')) {
    /**
     * Fetch and register the given menu.
     *
     * @return String
     */
    function menu($handle)
    {
        $menu  = Menu::make($handle, function() {});
        $model = MenuModel::where('handle', $handle)->first();

        $add = function($node, $parent = null) use ($menu) {
            if (is_null($parent)) {
                $item = $menu->add($node->name, $node->url);
            } else {
                $item = $parent->add($node->name, $node->url);
            }

            if ($node->new_window) {
                $item->attribute('target', '_blank');
            }

            // if ($node->has('children')) {
            //     foreach ($node->children as $child) {
            //         $add($child, $node);
            //     }
            // }
        };

        if ($model) {
            foreach ($model->nodes as $node) {
                if ($node->status) {
                    $add($node);
                }
            }
        }

        return $menu;
    }
}