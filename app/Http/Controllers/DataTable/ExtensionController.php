<?php

namespace App\Http\Controllers\DataTable;

use App\Models\Extension;
use App\Http\Controllers\DataTableController;

class ExtensionController extends DataTableController
{
    public function builder()
    {
        return Extension::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'handle'      => 'Handle',
        ];
    }
}
