<?php

namespace Fusion\Http\Middleware;

use Closure;
use Fusion\Models\Role;
use Illuminate\Contracts\Auth\Guard;

class UserHasPermission
{
    /**
     * @var Illuminate\Contracts\Auth\Guard
     */
    protected $auth;

    /**
     * Create a new UserHasPermission instance.
     *
     * @param Guard $auth
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Run the request filter.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $closure
     * @param array|string             $permissions
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $permissions)
    {
        if ($this->auth->check()) {
            if (! $this->auth->user()->can($permissions)) {
                if ($request->ajax()) {
                    return response('Forbidden.', 403);
                }

                abort(403, 'Forbidden action.');
            }
        } else {
            $guest = Role::whereSlug('guest')->first();

            if ($guest) {
                if (! $guest->hasPermissionTo($permissions)) {
                    if ($request->ajax()) {
                        return response('Forbidden.', 403);
                    }

                    abort(403, 'Forbidden action.');
                }
            }
        }

        return $next($request);
    }
}
