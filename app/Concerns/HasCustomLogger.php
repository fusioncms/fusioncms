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
use Monolog\Formatter\JsonFormatter;

trait HasCustomLogger
{
	/**
     * @var Monolog\Logger
     */
    protected $logger;

    /**
     * @var string
     */
    protected $logPath;

    /**
     * Set logger instance.
     *
     * @param  string $logPath
     * @return void
     */
    protected function createLogger($logPath)
    {
        // Clear file..
        $handle = fopen(storage_path($logPath), 'w+');
        fclose($handle);

    	$stream = new StreamHandler(storage_path($logPath));
    	$stream->setFormatter(new JsonFormatter());

        $this->logPath = $logPath;
    	$this->logger  = new Logger(basename($logPath), [ $stream ]);
    }

    /**
     * Record info message w/ context.
     * 
     * @param  string $message
     * @param  array  $context
     * @return void
     */
    protected function info($message, array $context = [])
    {
        $this->logger->log('info', $message, $context);
    }

    /**
     * Record notice message w/ context.
     * 
     * @param  string $message
     * @param  array  $context
     * @return void
     */
    protected function notice($message, array $context = [])
    {
        $this->logger->log('notice', $message, $context);
    }

    /**
     * Record error message w/ context.
     *
     * @param  string $message
     * @param  arra   $context
     * @return void
     */
    protected function error($message, array $context = [])
    {
        $this->logger->log('error', $message, $context);
    }
}