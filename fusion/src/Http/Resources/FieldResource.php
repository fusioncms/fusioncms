<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FieldResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $fieldtype = new FieldtypeResource(fieldtypes()->get($this->type));
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'handle'     => $this->handle,
            'help'       => $this->help,
            'required'   => $this->required,

            'type'       => $fieldtype,
            'placement'  => $this->placement,
            'section'    => $this->section ?: 'General',
            'settings'   => $this->settings,
            'validation' => $this->validation,
            'default'    => $fieldtype->getDefault(),

            'order'     => $this->order,
            'status'    => $this->status,
        ];
    }
}
