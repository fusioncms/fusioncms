<?php

namespace Fusion\Http\Resources;

use Illuminate\Support\Str;
use Fusion\Http\Resources\FormResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ResponseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $resource['id']                         = $this->id;
        $resource['identifiable_email_address'] = $this->identifiable_email_address;
        $resource['identifiable_ip_address']    = $this->identifiable_ip_address;
        $resource['form']                       = new FormResource($this->form);

        if ($this->fields) {
            foreach ($this->fields as $field) {
                $resource[$field->handle] = $field->type()->getResource($this->resource, $field);
            }
        }

        $resource['created_at'] = $this->created_at;
        $resource['updated_at'] = $this->updated_at;

        return $resource;
    }
}
