<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'handle'      => $this->handle,
            'description' => $this->description,
            'placement'   => $this->placement,
            'order'       => $this->order,
            'fields'      => FieldResource::collection($this->fields),
        ];
    }
}
