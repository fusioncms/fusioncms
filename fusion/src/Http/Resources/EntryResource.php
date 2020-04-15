<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EntryResource extends JsonResource
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
            'matrix' => new MatrixResource($this->resource['matrix']),
            'entry'  => [
                'id'         => $this->id,
                'name'       => $this->name,
                'slug'       => $this->slug,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
                'status'     => $this->status,
            ],
        ];

        if ($this->fields) {
            foreach ($this->fields as $field) {
                $resource['entry'][$field->handle] = $field->type()->getResource($this->resource, $field);
            }
        }

        return $resource;
    }
}
