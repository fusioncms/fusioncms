<?php


namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Matrix;
use Fusion\Http\Controllers\DataTableController;

class CollectionController extends DataTableController
{
    public function builder()
    {
        $matrix = Matrix::find(request()->route('collection'));

        if ($matrix) {
            return $matrix->getBuilder()->query();
        }

        return Matrix::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'slug',
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

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'slug'   => 'Slug',
        ];
    }
}
