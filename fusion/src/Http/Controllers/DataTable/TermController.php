<?php


namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Taxonomy;
use Fusion\Http\Controllers\DataTableController;

class TermController extends DataTableController
{
    public function builder()
    {
        return Taxonomy::findOrFail(request()->route('taxonomy'))
            ->getBuilder()
            ->query();
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
            'name' => 'Name',
            'slug' => 'Slug',
        ];
    }
}
