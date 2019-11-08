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

use App\Models\Import;
use App\Http\Controllers\DataTableController;

class ImportController extends DataTableController
{
    public function builder()
    {
        return Import::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'source',
            'module',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'source',
            'module',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'source',
            'module',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'handle' => 'Handle',
            'source' => 'Source',
            'module' => 'Module',
        ];
    }
}
