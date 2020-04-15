<?php

namespace Fusion\Events\Backups;

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