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
        $resource['matrix']        = new MatrixResource($this->resource['matrix']);
        $resource['entry']['id']   = $this->id;
        $resource['entry']['name'] = $this->name;
        $resource['entry']['slug'] = $this->slug;

        if ($this->fields) {
            foreach ($this->fields as $field) {
                $resource['entry'][$field->handle] = $field->type()->getResource($this->resource, $field);
            }
        }

        $resource['entry']['created_at'] = $this->created_at;
        $resource['entry']['updated_at'] = $this->updated_at;
        $resource['entry']['status'] = $this->status;

        return $resource;
    }
}
