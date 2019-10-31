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

        if(!isset($this->id)) {
            return abort('404');
        }

        $resource['matrix']        = $matrix;
        $resource['entry']['id']   = $this->id;
        $resource['entry']['name'] = $this->name;
        $resource['entry']['slug'] = $this->slug;

        if ($fields) {
            foreach ($fields as $field) {
                $fieldtype                         = fieldtypes()->get($field->type);
                $resource['entry'][$field->handle] = $this->{$field->handle};

                if ($fieldtype->hasRelationship()) {
                    $resource['entry'][$field->handle.'_raw'] = $this->{$field->handle.'_raw'};
                }
            }
        }

        $resource['entry']['status'] = $this->status;

        return $resource;
    }
}
