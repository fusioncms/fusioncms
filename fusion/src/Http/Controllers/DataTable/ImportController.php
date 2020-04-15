<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Import;
use Fusion\Http\Controllers\DataTableController;

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
