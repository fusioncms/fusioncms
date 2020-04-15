<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Permission;
use Fusion\Http\Controllers\DataTableController;

class PermissionController extends DataTableController
{
    public function builder()
    {
        return Permission::query();
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
