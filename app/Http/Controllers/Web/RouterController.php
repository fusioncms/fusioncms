<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Routers\PageRouter;
use App\Services\Routers\EntryRouter;
use App\Services\Routers\HomepageRouter;

class RouterController extends Controller
{
    /**
     * Delegate the request out to determine the route needed.
     *
     * @param  Request  $request
     * @return Response
     */
    public function handle(Request $request)
    {
        $routers = [
            HomepageRouter::class,
            EntryRouter::class,
            PageRouter::class,
        ];

        foreach ($routers as $router) {
            $result = app()->make($router)->handle($request);

            if ($result) {
                return $result;
            }
        }

        abort(404);
    }
}
