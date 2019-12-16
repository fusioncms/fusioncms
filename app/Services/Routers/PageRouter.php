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
use App\Services\Builders\Page;

class PageRouter extends Router
{
    public function handle(Request $request)
    {
        $matrices = Matrix::where('type', 'page')->get();

        foreach ($matrices as $matrix) {
            $found = $this->matchRoute($matrix->route, $request);

            if ($found === false or empty($matrix->template)) {
                continue 1;
            }

            $page = (new Page($matrix->handle))->get();
            
            $data = $this->bindRouteData($page->route, $request, [
                'matrix' => $matrix,
                'page'   => $page,
            ]);

            return view($matrix->template, $data);
        }
    }
}
