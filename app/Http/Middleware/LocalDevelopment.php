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

use Theme;
use Closure;
use Illuminate\Support\Facades\Artisan;

class LocalDevelopment
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if (app()->isLocal()) {
        //     // We're developing locally, so just copy any module
        //     // assets we may have to the public directory.
        //     Artisan::call('vendor:publish', ['--tag' => 'module', '--force' => true]);
        // }

        return $next($request);
    }
}
