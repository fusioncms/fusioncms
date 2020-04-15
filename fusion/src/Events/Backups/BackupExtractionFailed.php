<?php

namespace Fusion\Events\Backups;

use Exception;

class BackupExtractionFailed
{
	/**
	 * @var Exception
	 */
	public $exception;

    /**
     * @var string
     */
    public $extractionPath;

    public function __construct(Exception $exception, string $extractionPath)
    {
    	$this->exception      = $exception;
        $this->extractionPath = $extractionPath;
    }
}