<?php

namespace Fusion\Http\Controllers\DataTable;

use Illuminate\Http\Request;
use Caffeinated\Modules\Facades\Module;

class ModuleController
{
    public function index(Request $request)
    {
        // TODO: filter, sort, paginate..
        $modules = Module::all()->values();

        return response()->json([
            'displayable'  => array_values($this->getDisplayableColumns()),
            'sortable'     => array_values($this->getSortable()),
            'column_names' => $this->getCustomColumnNames(),
            'records'      => [ 'data' => $modules ],
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

    public function getFilterable()
    {
        return [
            'name',
            'slug',
            'version',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'slug',
            'version',
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
