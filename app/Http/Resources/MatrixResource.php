<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Resources;

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

            'show_title_field'   => $this->show_title_field,
            'title_label'        => $this->title_label,
            'title_format'       => $this->title_format,

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
