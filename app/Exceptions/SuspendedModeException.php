<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Exceptions;

use Exception;
use Carbon\Carbon;
use Symfony\Component\HttpKernel\Exception\ServiceUnavailableHttpException;

class SuspendedModeException extends ServiceUnavailableHttpException
{
    /**
     * When the application was put in maintenance mode.
     *
     * @var \Carbon\Carbon
     */
    public $wentDownAt;

    /**
     * Create a new exception instance.
     *
     * @param  int  $time
     * @param  int  $retryAfter
     * @param  string  $message
     * @param  \Exception  $previous
     * @param  int  $code
     * @return void
     */
    public function __construct($time, $message = null, Exception $previous = null, $code = 0)
    {
        parent::__construct(null, $message, $previous, $code);

        $this->wentDownAt = Carbon::createFromTimestamp($time);
    }
}
