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

use App\Http\Controllers\Controller;

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
