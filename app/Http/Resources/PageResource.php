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

class PageResource extends JsonResource
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
            'matrix' => new MatrixResource($this->matrix),
            'page'   => [
                'name'   => $this->name ?? $this->matrix->name,
                'slug'   => $this->slug ?? $this->matrix->slug,
                'status' => $this->status,
            ],
        ];

        if ($this->fields) {
            foreach ($this->fields as $field) {
                $resource['page'][$field->handle] = $field->type()->getResource($this->resource, $field);
            }
        }

        return $resource;
    }
}
