<?php

namespace Fusion\Http\Resources;

use Illuminate\Support\Str;
use Fusion\Http\Resources\FormResource;
use Illuminate\Http\Resources\Json\JsonResource;

class InboxResource extends JsonResource
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
            'id'                         => $this->id,
            'identifiable_email_address' => $this->identifiable_email_address,
            'identifiable_ip_address'    => $this->identifiable_ip_address,
            'form'                       => new FormResource($this->form),
            'created_at'                 => $this->created_at,
            'updated_at'                 => $this->updated_at,
        ];
    }
}
