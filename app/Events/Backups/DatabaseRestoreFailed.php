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

use Exception;

class DatabaseRestoreFailed
{
	/**
	 * @var Exception
	 */
	public $exception;

    /**
     * @var string
     */
    public $dbDumpPath;

    public function __construct(Exception $exception, string $dbDumpPath)
    {
    	$this->exception  = $exception;
        $this->dbDumpPath = $dbDumpPath;
    }
}