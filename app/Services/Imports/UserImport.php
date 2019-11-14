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
            'password' => 'sometimes|min:8|nullable',
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
     * Collect existing records for Import Strategies.
     *
     * @throws Exception
     * @return void
     */
    protected function collectExistingIds()
    {
        return User::all()->modelKeys();
    }

    /**
     * Store newly created record in storage.
     *
     * @param  array $attributes
     * @return void
     */
    protected function store(array $attributes)
    {
        try {
            $roles = $attributes['role'];
            unset($attributes['role']);

            $user = User::create($attributes);

            if (! empty($roles)) {
                $user->assignRoles($roles);
            }
        } catch (Exception $ex) {
            $this->error("Failed to store record [ID {$attributes['id']}].", ['message' => $ex->getMessage()]);
        }
    }

    /**
     * Update existing record in storage.
     *
     * @param  array $attributes
     * @return void
     */
    protected function update(array $attributes)
    {
        try {
            $user = User::findOrFail($attributes['id']);

            $password = $attributes['password'];
            $roles    = $attributes['role'];
            unset($attributes['password'], $attributes['role']);

            $user->update($attributes);

            if (! empty($password)) {
                $user->password            = $password;
                $user->password_changed_at = now();

                $user->save();
            }

            $user->syncRoles($roles);
        } catch (Exception $ex) {
            $this->error("Failed to update record [ID {$attributes['id']}].", ['message' => $ex->getMessage()]);
        }
    }

    /**
     * Disable existing records in storage.
     *
     * @param  array $ids
     * @throws Exception
     * @return void
     */
    protected function disableCollection(array $ids)
    {
        if (count($ids)) {
            foreach ($ids as $id) {
                User::where('id', $id)->update(['status' => false]);
            }
        }
    }

    /**
     * Remove existing records from storage.
     *
     * @param  array $ids
     * @throws Exception
     * @return void
     */
    protected function deleteCollection(array $ids)
    {
        if (count($ids)) {
            User::destroy($ids);
        }
    }
}
