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

use File;
use ReflectionClass;
use App\Models\Mailable;
use App\Http\Controllers\DataTableController;

class MailableController extends DataTableController
{
    public function builder()
    {
        Mailable::registerNewMailables();

        return Mailable::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'status'
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'status'
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'status'
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'handle' => 'Handle',
            'status' => 'Status',
        ];
    }
}
