<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NodeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $menu   = new MenuResource($this->menu);
        $fields = $menu->fieldset->fields ?? null;

        $resource['id']         = $this->id;
        $resource['name']       = $this->name;
        $resource['url']        = $this->url;
        $resource['new_window'] = $this->new_window;
        $resource['order']      = $this->order;

        if ($fields) {
            foreach ($fields as $field) {
                $fieldtype                = fieldtypes()->get($field->type);
                $resource[$field->handle] = $this->{$field->handle};
            }
        }

        $resource['parent']   = new NodeResource($this->parent);
        $resource['children'] = NodeResource::collection($this->children);

        $resource['created_at'] = $this->created_at;
        $resource['updated_at'] = $this->updated_at;
        $resource['status']     = $this->status;

        return $resource;
    }
}
