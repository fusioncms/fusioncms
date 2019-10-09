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

class ActivityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->id,
            'log_name'    => $this->log_name,
            'description' => $this->description,
            'properties'  => $this->properties,
            'causer'      => new UserResource($this->causer),
            // 'subject'     => $this->subject,
            'created_at'  => $this->created_at,
        ];
    }
}
