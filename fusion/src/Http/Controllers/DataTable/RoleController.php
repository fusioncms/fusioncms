<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Role;
use Fusion\Http\Controllers\DataTableController;

class RoleController extends DataTableController
{
    public function builder()
    {
        return Role::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'slug',
            'description',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'slug'        => 'Slug',
            'description' => 'Description',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'slug',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'slug',
        ];
    }
}
