<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Resources\Settings;

use Illuminate\Http\Resources\Json\JsonResource;

class SettingSectionResource extends JsonResource
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
            'name'        => $this->name,
            'handle'      => $this->handle,
            'group'       => $this->group,
            'icon'        => $this->icon,
            'description' => $this->description,
            'items'       => SettingResource::collection($this->settings),
        ];
    }
}
