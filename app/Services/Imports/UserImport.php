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
use App\Models\ImportLog;

class UserImport extends BaseImport
{
    public function __construct(Import $import, ImportLog $log)
    {
        parent::__construct($import, $log);
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
        $attributes = array_merge($attributes, [
            'password_confirmation' => $attributes['password']
        ]);

        fusion()
            ->authorize()
            ->post('users', $attributes);
    }

    /**
     * Update existing record in storage.
     *
     * @param  array $attributes
     * @return void
     */
    protected function update(array $attributes)
    {
        $attributes = array_merge($attributes, [
            'password_confirmation' => $attributes['password']
        ]);
        
        fusion()
            ->authorize()
            ->patch("users/{$attributes['id']}", $attributes);
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
