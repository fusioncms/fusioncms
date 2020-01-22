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

use Illuminate\Support\Str;
use App\Http\Resources\FormResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ResponseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $form   = new FormResource($this->form);
        $fields = $form->fieldset->fields ?? null;

        $resource['id']                         = $this->id;
        $resource['identifiable_email_address'] = $this->identifiable_email_address;
        $resource['identifiable_ip_address']    = $this->identifiable_ip_address;
        $resource['form']                       = $form;

        if ($fields) {
            foreach ($fields as $field) {
                $fieldtype                = fieldtypes()->get($field->type);
                $resource[$field->handle] = $this->{$field->handle};

                if ($fieldtype->hasRelationship()) {
                    $resource[$field->handle.'_raw'] = $this->{$field->handle.'_raw'};
                }
            }
        }

        $resource['created_at'] = $this->created_at;
        $resource['updated_at'] = $this->updated_at;

        return $resource;
    }
}
