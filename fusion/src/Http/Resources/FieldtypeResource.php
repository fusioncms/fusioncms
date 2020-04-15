<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FieldtypeResource extends JsonResource
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
            'id'          => $this->getID(),
            'name'        => $this->name,
            'icon'        => $this->icon,
            'handle'      => $this->getHandle(),
            'description' => $this->description,
            'cast'        => $this->cast,
            'column'      => $this->column,
            'exclude'     => $this->exclude,
            'messages'    => $this->messages,
            'field'       => $this->field,
            'settings'    => $this->settings,
            'data'        => $this->data,
            'structures'  => [],
        ];
    }
}
