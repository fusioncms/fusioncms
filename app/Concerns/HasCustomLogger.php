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
use App\Models\ImportLog;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\JsonFormatter;

trait HasCustomLogger
{
	/**
     * @var Monolog\Logger
     */
    protected $logger;

    /**
     * @var App\Models\ImportLog
     */
    protected $log;

    /**
     * @var string
     */
    protected $logPath;

    /**
     * Set logger instance.
     *
     * @param  string $filepath
     * @return void
     */
    protected function createLogger($filepath)
    {
    	$stream = new StreamHandler(storage_path($filepath));
    	$stream->setFormatter(new JsonFormatter());

        $this->logPath = $filepath;
    	$this->logger  = new Logger(basename($filepath), [ $stream ]);
    }

    /**
     * Create ImportLog record in storage.
     * 
     * @return void
     */
    protected function createLogRecord()
    {
        $this->log = ImportLog::create([
            'import_id'  => $this->import->id,
            'progress'   => 0,
            'total_rows' => $this->totalRows - 1,  // Exclude header row
            'log_file'   => $this->logPath,
            'status'     => 'importing'
        ]);
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