<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http;

use Exception;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class Dispatcher
{
    /**
     * Base URI.
     *
     * @var string
     */
    protected $baseUrl = 'api';

    /**
     * Create a new Dispatcher instance.
     */
    public function __construct()
    {
        app()->instance('middleware.disable', true);
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
        $uri     = url($this->baseUrl . '/' . $endpoint);
        $current = request();
        $request = Request::create($uri, $method, $parameters);

        if (! $this->validApiRoute($request)) {
            throw new Exception('The Fusion dispatcher requires a valid API endpoint.');
        }

        $response = app()->handle($request);

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
}
