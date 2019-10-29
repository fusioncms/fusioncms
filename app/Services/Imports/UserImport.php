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
            'id'     => 'sometimes|integer',
            'name'   => 'required',
            'email'  => 'required|email',
            'roles'  => 'sometimes|array',
            'status' => 'required|boolean',
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
     * Persist data.
     *
     * @return void
     */
    public function handle()
    {
        // User::updateOrCreate(['id' => $this->get('id')], $this->all());
    }
}
