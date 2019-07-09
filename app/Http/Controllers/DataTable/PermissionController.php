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

use App\Models\Permission;
use App\Http\Controllers\DataTableController;

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
