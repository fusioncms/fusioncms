<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Concerns;

use Storage;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;

trait HasCustomLogger
{
	/**
     * Custom logger for import.
     * 
     * @var Monolog\Logger
     */
    protected $logger;

    /**
     * Set logger instance.
     * 
     * @param string $filepath
     */
    public function setLogger($filepath)
    {
    	$name      = basename($filepath);
    	$stream    = new StreamHandler($filepath);
    	$formatter = new LineFormatter();

    	$stream->setFormatter($formatter);

    	$this->logger = new Logger($name, [ $stream ]);
    }

    public function getLogFilePath()
    {
        return $this->logger->getHandlers()[0]->getUrl();
    }
}