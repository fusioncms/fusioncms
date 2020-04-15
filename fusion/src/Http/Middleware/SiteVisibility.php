<?php

namespace Fusion\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;

class SiteVisibility
{
    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (($this->auth->guest()) and (setting('system.site_visibility') == 'private')) {
            if ($request->ajax()) {
                return response('Unauthorized.', 401);
            }

            $safePaths = ['login', 'register', 'password/*'];
            $safe      = false;

            foreach ($safePaths as $path) {
                if ($request->is($path)) {
                    $safe = true;

                    break;
                }
            }

            if ($safe === false) {
                return redirect('/login');
            }
        }

        return $next($request);
    }
}
