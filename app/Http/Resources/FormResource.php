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

class FormResource extends JsonResource
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
            'id'               => $this->id,
            'name'             => $this->name,
            'handle'           => $this->handle,
            'description'      => $this->description,
            'table'            => $this->table,

            'fieldset'         => new FieldsetResource($this->fieldset),
            'responses'        => $this->responses,
        ];

        if ($this->fieldset) {
            foreach ($this->fieldset->fields as $field) {
                $resource['fields'][$field->handle] = $this->{$field->handle};
            }
        }

        return $resource;
    }
}
