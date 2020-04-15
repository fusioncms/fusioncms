<?php

namespace Fusion\Events\Backups;

class DatabaseRestoreSuccessful
{
    /**
     * @var string
     */
    public $dbDumpPath;

    public function __construct(string $dbDumpPath)
    {
        $this->dbDumpPath = $dbDumpPath;
    }
}