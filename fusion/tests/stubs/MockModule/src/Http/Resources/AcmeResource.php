<?php

namespace Modules\MockModule\Http\Resources;

use Fusion\Http\Resources\FieldsetResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AcmeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $resource = parent::toArray($request);

        if ($this->fieldset) {
            $resource['fieldset'] = new FieldsetResource($this->fieldset);

            foreach ($this->fields as $field) {
                $resource[$field->handle] = $this->extension->{$field->handle} ?? $field->default;
            }
        }

        return $resource;
    }
}
