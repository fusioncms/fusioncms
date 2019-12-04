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