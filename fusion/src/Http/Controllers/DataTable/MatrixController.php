<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Matrix;
use Fusion\Http\Controllers\DataTableController;

class MatrixController extends DataTableController
{
    public function builder()
    {
        return Matrix::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'description',
            'type',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'description',
            'type',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'description',
            'type',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'handle'      => 'Handle',
            'description' => 'Description',
            'type'        => 'Type',
        ];
    }
}
