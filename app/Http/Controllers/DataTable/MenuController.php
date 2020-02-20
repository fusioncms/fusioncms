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

use App\Models\Menu;
use App\Http\Controllers\DataTableController;

class MenuController extends DataTableController
{
    public function builder()
    {
        return Menu::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'description',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'description',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'description',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'handle'      => 'Handle',
            'description' => 'Description',
        ];
    }
}
