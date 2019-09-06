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

use App\Models\Matrix;
use App\Http\Controllers\DataTableController;

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
            'status',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'slug',
            'status',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'slug',
            'status',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'slug'   => 'Slug',
            'status' => 'Status',
        ];
    }
}
