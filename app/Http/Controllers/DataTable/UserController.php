<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\DataTable;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\DataTableController;

class UserController extends DataTableController
{
    public function builder()
    {
        if (request()->route() and request()->route()->hasParameter('role')) {
            return User::whereHas('roles', function ($query) {
                $query->where('slug', request()->route('role'));
            });
        } else {
            return User::query();
        }
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'email',
            'role',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'email',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'  => 'Name',
            'email' => 'E-mail',
            'role'  => 'Role',
        ];
    }
}
