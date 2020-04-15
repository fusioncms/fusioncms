<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;

class HomepageController extends Controller
{
    /**
     * Show the home index screen.
     *
     * @return Theme
     */
    public function index()
    {
        return view('index');
    }
}
