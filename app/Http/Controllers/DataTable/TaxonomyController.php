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

use App\Models\Taxonomy;
use App\Http\Controllers\DataTableController;

class TaxonomyController extends DataTableController
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
