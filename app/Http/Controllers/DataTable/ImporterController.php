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

class ImporterController extends DataTableController
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
            'location',
            'module',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'location',
            'module',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'location',
            'module',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'     => 'Name',
            'handle'   => 'Handle',
            'location' => 'Location',
            'module'   => 'Module',
        ];
    }
}
