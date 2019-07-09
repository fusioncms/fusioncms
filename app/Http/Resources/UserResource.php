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
            'verified'               => $this->verified,
            'logged_in_at'           => $this->logged_in_at,
            'invalidly_logged_in_at' => $this->invalidly_logged_in_at,
            'password_changed_at'    => $this->password_changed_at,
            'invalid_logins'         => $this->invalid_logins,
            'fields'                 => $this->fields,
            'created_by'             => $this->created_by,
            'updated_by'             => $this->updated_by,
            'created_at'             => $this->created_at,
            'updated_at'             => $this->updated_at,
        ];
    }
}
