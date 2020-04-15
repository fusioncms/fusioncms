<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
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
        ];

        $fields = $this->resource['matrix']->fieldset->fields;

        if ($fields) {
            foreach ($fields as $field) {
                $resource['page'][$field->handle] = $this->resource['page']->{$field->handle};
            }
        }

        $resource['page']['status'] = $this->resource['page']['status'];

        return $resource;
    }
}
