<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Foundation\Application;
use App\Foundation\Exceptions\SuspendedModeException;

class CheckForSuspendedMode
{
    /**
     * The application implementation.
     *
     * @var \Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Foundation\Application  $app
     * @return void
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     *
     * @throws \App\Foundation\Exceptions\SuspendedModeException
     */
    public function handle($request, Closure $next)
    {
        if ($this->app->isSuspended()) {
            $data = json_decode(file_get_contents($this->app->storagePath() . '/framework/suspended'), true);

            throw new SuspendedModeException($data['time'], $data['message']);
        }

        return $next($request);
    }
}
