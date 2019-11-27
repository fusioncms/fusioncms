<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Themes\Hello\Http\Controllers;

class TestController extends Controller
{
    public function __invoke()
    {
        return view('test');
    }
}
