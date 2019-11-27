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

class FieldResource extends JsonResource
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
            'id'         => $this->id,
            'name'       => $this->name,
            'handle'     => $this->handle,
            'help'       => $this->help,
            'required'   => $this->required,

            'type'       => new FieldtypeResource(fieldtypes()->get($this->type)),
            'placement'  => $this->placement,
            'section'    => $this->section ?: 'General',
            'settings'   => $this->settings,
            'validation' => $this->validation,

            'order'     => $this->order,
            'status'    => $this->status,
        ];
    }
}
