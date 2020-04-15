<?php

namespace Fusion\Events\Backups;

use Exception;

class FileRestoreFailed
{
	/**
	 * @var Exception
	 */
	public $exception;

    /**
     * @var array
     */
    public $filesToCopy;

    public function __construct(Exception $exception, array $filesToCopy)
    {
    	$this->exception   = $exception;
        $this->filesToCopy = $filesToCopy;
    }
}