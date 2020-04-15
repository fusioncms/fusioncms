<?php

namespace Fusion\Http\Resources;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ImportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $response         = parent::toArray($request);
        $response['logs'] = ImportLogResource::collection($this->logs);

        return $response;
    }
}
