<?php

namespace Fusion\Services\Imports;

use Fusion\Models\User;
use Fusion\Models\Import;
use Fusion\Models\ImportLog;

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
