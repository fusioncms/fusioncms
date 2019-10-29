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

class TermResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $taxonomy = new TaxonomyResource($this->resource['taxonomy']);
        $fields   = $taxonomy->fieldset->fields ?? null;
        
        $resource['id']       = $this->id;
        $resource['name']     = $this->name;
        $resource['slug']     = $this->slug;
        $resource['taxonomy'] = $taxonomy;

        if ($fields) {
            foreach ($fields as $field) {
                $resource[$field->handle] = $this->{$field->handle};
            }
        }

        $resource['status'] = $this->status;

        return $resource;
    }
}
