<?php

namespace Fusion\Http\Controllers\DataTable;

use File;
use Theme;
use ReflectionClass;
use Fusion\Models\Mailable;
use Fusion\Http\Controllers\DataTableController;

class MailableController extends DataTableController
{
    public function builder()
    {
        Mailable::registerNewMailables();

        return Mailable::active();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'theme',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'theme',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'theme',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'handle' => 'Handle',
            'theme'  => 'Theme',
        ];
    }
}
