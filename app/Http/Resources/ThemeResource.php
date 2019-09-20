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
        ];
    }
}
