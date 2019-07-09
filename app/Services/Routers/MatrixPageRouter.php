<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Routers;

use App\Models\Matrix;
use Illuminate\Http\Request;

class MatrixPageRouter extends Router
{
    public function handle(Request $request)
    {
        $pages = Matrix::where('type', 'page')->get();

        foreach ($pages as $page) {
            $found = $this->matchRoute($page->route, $request);

            if ($found === false or empty($page->template)) {
                continue 1;
            }

            $data = $this->bindRouteData($page->route, $request, [
                'page' => $page,
            ]);

            return view($page->template, $data);
        }
    }
}
