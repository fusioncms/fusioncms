<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
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
            'log_name'    => $this->log_name,
            'description' => $this->description,
            'properties'  => $this->properties,
            'causer'      => new UserResource($this->causer),
            'created_at'  => $this->created_at,
        ];
    }
}
