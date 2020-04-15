<?php

namespace Fusion\Services\Routers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;

abstract class Router
{
    /**
     * @var array
     */
    protected $methods = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];

    /**
     * Handle the router request.
     *
     * @param  Request  $request
     * @return mixed
     */
    abstract public function handle(Request $request);

    /**
     * Determine if the passed route matches the request.
     *
     * @param  string  $route
     * @param  Request  $request
     * @return bool
     */
    protected function matchRoute($route, $request)
    {
        $route = new Route($this->methods, $route, null);

        if ($route->matches($request)) {
            return $route->bind($request);
        }

        return false;
    }

    /**
     * Bind and return the data array to the passed route.
     *
     * @param  string  $route
     * @param  Request  $request
     * @return array
     */
    protected function bindRouteData($route, $request, array $additionalData = [])
    {
        $data = (new Route($this->methods, $route, null))
            ->bind($request)->parameters();

        return array_merge($data, $additionalData);
    }
}
