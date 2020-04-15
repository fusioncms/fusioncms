<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FieldsetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $resource = [
            'id'       => $this->id,
            'name'     => $this->name,
            'handle'   => $this->handle,
            'sections' => SectionResource::collection($this->sections),
        ];

        return $resource;
    }
}
