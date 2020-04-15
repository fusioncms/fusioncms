<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Web\Auth\LoginController as AuthLoginController;

class LoginController extends AuthLoginController
{
    public function create()
    {
        return view('auth.login');
    }
}
