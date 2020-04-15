<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Models\User;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\UserResource;
use Fusion\Http\Requests\PasswordRequest;

class PasswordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Fusion\Http\Requests\PasswordRequest  $request
     * @param  \Fusion\Models\User                    $user
     * @return \Fusion\Http\Resources\UserResource
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
