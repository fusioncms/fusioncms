<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Fieldset;
use Fusion\Http\Controllers\DataTableController;

class FieldsetController extends DataTableController
{
    public function builder()
    {
        return Fieldset::query();
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
