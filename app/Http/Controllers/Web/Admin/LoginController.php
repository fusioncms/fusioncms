<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web\Admin;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Web\Auth\LoginController as AuthController;

class LoginController extends AuthController
{
    /**
     * User login attempt, catch ValidationException.
     * [override].
     *
     * @param  Request  $request
     * @param  mixed    $user
     * @return mixed
     */
    public function authenticate(Request $request)
    {
        try {
            return $this->login($request);
        } catch (ValidationException $ex) {
            return response()->json($ex->validator->errors(), $ex->status);
        }
    }

    /**
     * The user has been authenticated.
     * [override].
     *
     * @param  Request  $request
     * @param  mixed    $user
     * @return JsonResponse
     */
    protected function authenticated(Request $request, $user)
    {
        return new UserResource($user);
    }
}
