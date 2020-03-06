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
use Illuminate\Http\Request;
use App\Http\Controllers\DataTableController;

class MatrixFieldController extends DataTableController
{
    public function builder()
    {
        if (request()->has('matrix')) {
            return Matrix::find(request()->route('matrix'))->fields()->getQuery();
        } else {
            return Matrix::query();
        }
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'fieldtype',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'fieldtype',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'      => 'Name',
            'handle'    => 'Handle',
            'fieldtype' => 'Fieldtype',
        ];
    }
}
