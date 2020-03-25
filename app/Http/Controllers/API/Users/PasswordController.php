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
use App\Http\Requests\PasswordRequest;

class PasswordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \App\Http\Requests\PasswordRequest  $request
     * @param  \App\Models\User                    $user
     * @return \App\Http\Resources\UserResource
     */
    public function index(PasswordRequest $request, User $user)
    {
        $user->update([
            'password'            => bcrypt($request->password),
            'password_changed_at' => now(),
        ]);

        activity()
            ->performedOn($user)
            ->withProperties([
                'icon' => 'user',
                'link' => 'users/'.$user->id.'/edit',
            ])
            ->log('Updated user password (:subject.name)');

        return new UserResource($user);
    }
}
