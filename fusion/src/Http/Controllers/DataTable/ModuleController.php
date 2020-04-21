<?php

namespace Fusion\Http\Controllers\DataTable;

use Illuminate\Http\Request;
use Caffeinated\Modules\Facades\Module;

class ModuleController
{
    public function index(Request $request)
    {
        return response()->json([
            'displayable'  => array_values($this->getDisplayableColumns()),
            'sortable'     => [],
            'column_names' => $this->getCustomColumnNames(),
            'records'      => [ 'data' => Module::all()->values() ],
        ]);
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'slug',
            'version',
            'description'
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'slug'        => 'Slug',
            'version'     => 'Version',
            'description' => 'Description',
        ];
    }
}
