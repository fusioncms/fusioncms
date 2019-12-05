<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Events\Backups;

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