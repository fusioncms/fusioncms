<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FormResource extends JsonResource
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
            'id'                      => $this->id,
            'name'                    => $this->name,
            'handle'                  => $this->handle,
            'slug'                    => $this->slug,
            'description'             => $this->description,
            'collect_email_addresses' => $this->collect_email_addresses,
            'collect_ip_addresses'    => $this->collect_ip_addresses,
            'response_receipt'        => $this->response_receipt,
            'message'                 => $this->message,
            'redirect_on_submission'  => $this->redirect_on_submission,
            'redirect_url'            => $this->redirect_url,
            'enable_recaptcha'        => $this->enable_recaptcha,
            'enable_honeypot'         => $this->enable_honeypot,
            'send_to'                 => $this->send_to,
            'reply_to'                => $this->reply_to,
            'form_template'           => $this->form_template,
            'thankyou_template'       => $this->thankyou_template,
            'status'                  => $this->status,

            'table'                   => $this->table,
            'fieldset'                => new FieldsetResource($this->fieldset),
            'responses'               => $this->responses,
        ];

        if ($this->fieldset) {
            foreach ($this->fieldset->fields as $field) {
                $resource['fields'][$field->handle] = $this->{$field->handle};
            }
        }

        return $resource;
    }
}
