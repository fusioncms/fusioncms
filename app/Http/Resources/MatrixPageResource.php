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

class MatrixPageResource extends JsonResource
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
            'matrix' => new MatrixResource($this->resource['matrix']),
        ];

        if(isset($this->resource['matrix']->fieldset)) {
            $fields = $this->resource['matrix']->fieldset->fields;

            if ($fields) {
                foreach ($fields as $field) {
                    $resource['page'][$field->handle] = $this->resource['page']->{$field->handle};
                }
            }
        } 

        $resource['page']['status'] = $this->resource['page']['status'];

        return $resource;
    }
}
