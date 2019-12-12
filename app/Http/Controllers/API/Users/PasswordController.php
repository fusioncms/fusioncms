<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API\Users;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\UpdateUserSecurity;

class PasswordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  UpdateUserSecurity $request
     * @param  User               $user
     * @return Response
     */
    public function index(UpdateUserSecurity $request, User $user)
    {
        $this->authorize('users.update');

        $user->update([
            'password'            => bcrypt($request->input('password')),
            'password_changed_at' => now(),
        ]);

        activity()
            ->performedOn($user)
            ->withProperties([
                'icon' => 'user',
                'link' => 'users/edit/' . $user->id,
            ])
            ->log('Updated user password (:subject.name)');

        return new UserResource($user);
    }
}
