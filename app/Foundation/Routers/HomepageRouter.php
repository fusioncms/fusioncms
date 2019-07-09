<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Routers;

use App\Models\Matrix;
use Illuminate\Http\Request;

class HomepageRouter extends Router
{
    public function handle(Request $request)
    {
        if ($this->matchRoute('/', $request)) {
            $page = Matrix::where('route', '/')->first();

            if ($page) {
                $data = fusion()->get('pages/' . $page->id);
                $data = $this->bindRouteData('/', $request, (array) $data->data);

                return view($page->template, $data);
            } else {
                return view('index');
            }
        }
    }
}
