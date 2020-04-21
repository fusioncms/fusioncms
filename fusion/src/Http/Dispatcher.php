<?php

namespace Fusion\Http;

use Exception;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Contracts\Auth\Access\Gate;
use Illuminate\Validation\ValidationException;

class Dispatcher
{
    /**
     * Base URI.
     *
     * @var string
     */
    protected $baseUrl = 'api';

    /**
     * Ignored middleware.
     *
     * @var array
     */
    protected $middleware = [];

    /**
     * Bypass authentication/authorization checks against the request.
     *
     * @return self
     */
    public function authorize()
    {
        return $this->withoutAuthentication()
                    ->withoutAuthorization();
    }

    /**
     * Bypass gate checks against the request.
     *
     * @return self
     */
    public function withoutAuthorization()
    {
        app()->bind(Gate::class, function ($app) {
            return new class {
                public function authorize($ability, $arguments = [])
                {
                    return true;
                }
            };
        });

        return $this;
    }

    /**
     * Bypass throttle checks against the request.
     *
     * @return self
     */
    public function dethrottle()
    {
        $this->middleware[] = \Illuminate\Routing\Middleware\ThrottleRequests::class;

        return $this;
    }

    /**
     * Bypass authentication checks against the request.
     *
     * @return self
     */
    public function withoutAuthentication()
    {
        $this->middleware[] = config('fusion.authenticate.middleware');

        return $this;
    }

    /**
     * GET request.
     *
     * @param  string  $endpoint
     * @param  string  $method
     * @param  array  $parameters
     */
    public function get($endpoint, $parameters = [])
    {
        return $this->dispatch($endpoint, 'GET', $parameters);
    }

    /**
     * POST request.
     *
     * @param  string  $endpoint
     * @param  string  $method
     * @param  array  $parameters
     */
    public function post($endpoint, $parameters = [])
    {
        return $this->dispatch($endpoint, 'POST', $parameters);
    }

    /**
     * PATCH request.
     *
     * @param  string  $endpoint
     * @param  string  $method
     * @param  array  $parameters
     */
    public function patch($endpoint, $parameters = [])
    {
        return $this->dispatch($endpoint, 'PATCH', $parameters);
    }

    /**
     * DELETE request.
     *
     * @param  string  $endpoint
     * @param  string  $method
     * @param  array  $parameters
     */
    public function delete($endpoint, $parameters = [])
    {
        return $this->dispatch($endpoint, 'DELETE', $parameters);
    }

    /**
     * Dispatch a new request.
     *
     * @param  string  $endpoint
     * @param  string  $method
     * @param  array  $parameters
     */
    protected function dispatch($endpoint, $method, $parameters = [])
    {
        $this->disableMiddleware();

        $uri     = url($this->baseUrl . '/' . $endpoint);
        $current = request();
        $request = Request::create($uri, $method, $parameters);

        if (! $this->validApiRoute($request)) {
            throw new Exception('The Fusion dispatcher requires a valid API endpoint.');
        }

        $response = app()->handle($request);

        if ($response->exception instanceOf ValidationException) {
            throw new ValidationException($response->exception->validator);
        }

        app()->instance('request', $current);

        return json_decode($response->getContent());
    }

    /**
     * Determine if the given request is a valid API request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function validApiRoute(Request $request)
    {
        $routes = Route::getRoutes();
        $route  = $routes->match($request);

        if (Str::startsWith($route->uri(), 'api/')) {
            return true;
        }

        return false;
    }

    /**
     * Checks for "dynamic" methods.
     */
    public function __call($name, $arguments)
    {
        if ($name == 'andWithoutAuthentication') {
            return $this->withoutAuthentication();
        }

        if ($name == 'andWithoutAuthorization') {
            return $this->withoutAuthorization();
        }
    }

    /**
     * Disable middleware from Request.
     *
     * @return void
     */
    protected function disableMiddleware()
    {
        foreach ((array) $this->middleware as $abstract) {
            app()->instance($abstract, new class {
                public function handle($request, $next)
                {
                    return $next($request);
                }
            });
        }
    }
}
