<?php

namespace Fusion\Http\Resources;

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
        $resource['id']         = $this->id;
        $resource['name']       = $this->name;
        $resource['url']        = $this->url;
        $resource['new_window'] = $this->new_window;
        $resource['order']      = $this->order;

        if ($this->fields) {
            foreach ($this->fields as $field) {
                $resource[$field->handle] = $field->type()->getResource($this->resource, $field);
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
