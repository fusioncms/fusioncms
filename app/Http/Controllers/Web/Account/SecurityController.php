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
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;

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
            fusion()->authorize()->post(
                'users/' . auth()->user()->id . '/password',
                $request->all()
            );

            Flash::success('Security settings have been updated.');
        } catch(ValidationException $exception) {
            // Display first error message..
            foreach ($exception->errors() as $error) {
                Flash::error(current($error));
                break;
            }
        } catch(Exception $exception) {
            Flash::error($exception->getMessage());
        }

        return redirect()->back();
    }
}
