<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Taxonomy;
use Fusion\Http\Controllers\DataTableController;

class TermController extends DataTableController
{
    public function builder()
    {
        if (request()->route('taxonomy')) {
            return Taxonomy::findOrFail(request()->route('taxonomy'))
                ->getBuilder()
                ->query();
        } else {
            return Taxonomy::query();
        }
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
