<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\User;
use Fusion\Models\Role;
use Fusion\Http\Controllers\DataTableController;

class UserController extends DataTableController
{
    public function builder()
    {
        if (request()->route('role')) {
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
