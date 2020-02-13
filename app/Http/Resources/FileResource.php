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

class FileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $resource = parent::toArray($request);

        $resource['url']          = url($resource['url']);
        $resource['directory_id'] = (int) $resource['directory_id'];

        $type = explode('/', $resource['mimetype'])[0];

        switch($type) {
            case 'image':
            case 'audio':
            case 'video':
                $resource['type'] = $type;
            break;
            default:
                $resource['type'] = 'document';
        }

        return $resource;
    }
}
