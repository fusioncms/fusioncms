<?php

namespace Fusion\Http\Resources;

use Theme;
use Illuminate\Http\Resources\Json\JsonResource;

class ThemeResource extends JsonResource
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
            'name'        => $this->get('name'),
            'slug'        => $this->get('slug'),
            'description' => $this->get('description'),
            'author'      => $this->get('author'),
            'version'     => $this->get('version'),
            'active'      => $this->get('slug') === Theme::getCurrent(),
            'preview'     => "/themes/{$this->get('slug')}/preview.png",
            'settings'    => $this->get('settings'),
            'setting'     => $this->getSettingValues($this->get('slug')),
        ];
    }

    protected function getSettingValues()
    {
        $settingsFilePath = storage_path('themes/'.$this->get('slug').'.json');

        $defaults = collect($this->get('settings'))->mapWithKeys(function($setting, $handle) {
            return [$handle => $setting['default'] ?? null];
        });

        if (! \File::exists($settingsFilePath)) {
            return $defaults;
        }

        return json_decode(\File::get($settingsFilePath), true);
    }
}
