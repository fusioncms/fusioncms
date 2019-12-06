<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web\Account;

use Flash;
use Exception;
// use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use App\Http\Requests\UpdateUserSecurity;

class SecurityController extends Controller
{
    /**
     * @param  Request  $request
     * @return mixed
     */
    public function edit(Request $request)
    {
        return view('account.security');
    }

    /**
     * @param  Request $request
     * @return Redirect
     */
    public function update(Request $request)
    {
        try {
            fusion()->patch(
                'api/users/' . auth()->user()->id . '/password',
                $request->all()
            );

            Flash::success('Security settings have been updated.');
        } catch(Exception $exception) {
            Flash::error($exception->getMessage());
        }

        // $user       = User::find(auth()->user()->id);
        // $attributes = $request->only('password');

        // $test = $user->update([
        //     'password'            => bcrypt($attributes['password']),
        //     'password_changed_at' => now(),
        // ]);

        // \Flash::success('Security settings have been updated.');

        return redirect()->back();
    }
}
