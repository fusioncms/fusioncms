<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
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
