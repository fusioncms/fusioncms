<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web\Settings;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserAccount;

class AccountController extends Controller
{
    /**
     * @param  Request  $request
     * @return mixed
     */
    public function edit(Request $request)
    {
        return view('settings.account');
    }

    public function update(UpdateUserAccount $request)
    {
        $user       = User::find(auth()->user()->id);
        $attributes = $request->validated();

        $user->update($attributes);

        \Flash::success('Account settings have been updated.');

        return redirect()->back();
    }
}
