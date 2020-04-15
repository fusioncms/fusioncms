<?php

use Fusion\Models\Menu as MenuModel;

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
            $item = $menu->add($node->name, $node->url);

            if ($node->new_window) {
                $item->attribute('target', '_blank');
            }

            if ($fieldset = $node->menu->fieldset) {
                foreach ($fieldset->fields as $field) {
                    $item->attribute($field->handle, $node->{$field->handle} ?? false);
                }
            }
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