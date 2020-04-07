<?php


namespace Fusion\Http\Resources\Settings;

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
