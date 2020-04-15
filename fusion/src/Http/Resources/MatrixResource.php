<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MatrixResource extends JsonResource
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
            'id'                 => $this->id,
            'parent_id'          => $this->parent_id,
            'name'               => $this->name,
            'handle'             => $this->handle,
            'slug'               => $this->slug,
            'description'        => $this->description,
            'type'               => $this->type,
            'admin_path'         => $this->adminPath,
            'table'              => $this->table,

            'reference_singular' => $this->reference_singular,
            'reference_plural'   => $this->reference_plural,

            'sidebar'            => $this->sidebar,
            'quicklink'          => $this->quicklink,
            'icon'               => $this->icon,

            'route'              => $this->route,
            'template'           => $this->template,

            'show_name_field'    => $this->show_name_field,
            'name_label'         => $this->name_label,
            'name_format'        => $this->name_format,

            'revision_control'   => $this->revision_control,
            'publishable'        => $this->publishable,

            'status'             => $this->status,

            'fieldset'         => new FieldsetResource($this->fieldset),
            'parent'           => new MatrixResource($this->parent),
            'children'         => MatrixResource::collection($this->whenLoaded('children')),
        ];

        return $resource;
    }
}
