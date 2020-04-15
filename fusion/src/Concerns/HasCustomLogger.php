<?php

namespace Fusion\Concerns;

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
    	$stream = new StreamHandler(Storage::path($logPath));
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