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

use App\Http\Controllers\Web\Auth\LoginController as AuthLoginController;

class LoginController extends AuthLoginController
{
    public function create()
    {
        return view('auth.login');
    }
}
