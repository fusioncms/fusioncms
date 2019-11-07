<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Imports;

use App\Models\User;
use App\Models\Import;
use Illuminate\Support\Str;

class UserImport extends BaseImport
{
    public function __construct(Import $import)
    {
        parent::__construct($import);
    }
    
    /**
     * Row validation rules.
     * [override]
     * 
     * @return array
     */
    public function rules()
    {
        return [
            'id'       => 'sometimes|integer',
            'name'     => 'required',
            'email'    => 'required|email',
            'role'     => 'sometimes|string',
            'password' => 'sometimes|min:8',
            'status'   => 'required|boolean',
        ];
    }

    /**
     * Set custom attributes for validator errors.
     * [override]
     *
     * @return array
     */
    public function messages()
    {
        return [];
    }

    /**
     * Set default role if one isn't provided.
     * 
     * @param  string $value
     * @return string
     */
    public function getRoleAttribute($value)
    {
        return $value ?? 'user';
    }

    /**
     * Set default password if one isn't provided.
     * 
     * @param  string $value
     * @return string
     */
    public function getPasswordAttribute($value)
    {
        return $value ? bcrypt($value) : $value;
    }

    /**
     * Persist data.
     *
     * @return void
     */
    public function handle()
    {
        $attributes = $this->getAttributes();

        //TODO: keep old password?
        
        $user = User::updateOrCreate(
            ['id' => $attributes['id']],
            $attributes
        );

        $user->assignRoles($attributes['role']);
    }
}
