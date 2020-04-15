<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'id'                     => $this->id,
            'name'                   => $this->name,
            'roles'                  => RoleResource::collection($this->roles()->get()),
            'email'                  => $this->email,
            'status'                 => $this->status,
            'logged_in_at'           => $this->logged_in_at,
            'invalidly_logged_in_at' => $this->invalidly_logged_in_at,
            'password_changed_at'    => $this->password_changed_at,
            'email_verified_at'      => $this->email_verified_at,
            'verified'               => $this->verified,
            'invalid_logins'         => $this->invalid_logins,
            'fields'                 => $this->fields,
            'created_by'             => $this->created_by,
            'updated_by'             => $this->updated_by,
            'created_at'             => $this->created_at,
            'updated_at'             => $this->updated_at,
        ];
    }
}
