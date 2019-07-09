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
use GuzzleHttp\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class LaunchpadHandler implements ShouldQueue
{
    use InteractsWithQueue, Queueable;

    /**
     * Report an exception to the Launchpad exceptions database.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report($exception)
    {
        if ((! app()->environment('local'))) {
            try {
                $this->send($this->getExceptionData($exception));
            } catch (Exception $e) {
                Log::error($e);
            }
        }
    }

    /**
     * Get all the essential data pertaining to the exception.
     *
     * @param  Exception  $exception
     * @return array
     */
    protected function getExceptionData($exception)
    {
        $data = [];

        $data['environment'] = env('APP_ENV');
        $data['host']        = Request::server('SERVER_NAME');
        $data['method']      = Request::method();
        $data['fullUrl']     = Request::fullUrl();
        $data['exception']   = $exception->getMessage();
        $data['error']       = $exception->getTraceAsString();
        $data['line']        = $exception->getLine();
        $data['file']        = $exception->getFile();
        $data['class']       = get_class($exception);

        // Make Symfony exceptions more readable
        if ($data['class'] === 'Symfony\Component\Debug\Exception\FatalErrorException') {
            preg_match("~^(.+)' in ~", $data['exception'], $matches);

            if (isset($matches[1])) {
                $data['exception'] = $matches[1];
            }
        }

        return $data;
    }

    /**
     * Send the exception data to Launchpad.
     *
     * @param  array  $data
     * @return void
     */
    protected function send($data)
    {
        $client = new Client;

        $response = $client->post(setting('system.launchpad_api') . '/error', [
            'form_params' => [
                'token'      => setting('system.license_key'),
                'domain'     => $data['host'],
                'version'    => app_version(),
                'exception'  => $data,
                'ip_address' => Request::ip(),
            ],
        ]);
    }
}
