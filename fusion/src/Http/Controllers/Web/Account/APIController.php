<?php

namespace Fusion\Http\Controllers\Web\Account;

use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;

class APIController extends Controller
{
    /**
     * @param  Request  $request
     * @return mixed
     */
    public function edit(Request $request)
    {
        return view('account.api');
    }
}
