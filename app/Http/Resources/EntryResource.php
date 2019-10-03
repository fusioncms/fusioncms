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
        $matrix = new MatrixResource($this->resource['matrix']);
        $fields = $matrix->fieldset->fields ?? null;
        
        $resource['id']     = $this->id;
        $resource['name']   = $this->name;
        $resource['slug']   = $this->slug;
        $resource['matrix'] = $matrix;

        if ($fields) {
            foreach ($fields as $field) {
                $resource[$field->handle] = $this->{$field->handle};
            }
        }

        $resource['status'] = $this->status;

        return $resource;
    }
}
