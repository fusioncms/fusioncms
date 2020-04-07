<?php


namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Taxonomy;
use Fusion\Http\Controllers\DataTableController;

class TermController extends DataTableController
{
    public function builder()
    {
        $taxonomy = Taxonomy::find(request()->route('taxonomy'));

        if ($taxonomy) {
            return $taxonomy->getBuilder()->query();
        }

        return Taxonomy::query();
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
