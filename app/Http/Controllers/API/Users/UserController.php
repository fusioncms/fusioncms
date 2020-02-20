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
use App\Events\UserDeleted;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    /**
     * Return a paginated resource of all users.
     *
     * @return \App\Http\Resources\UserResource
     */
    public function index()
    {
        $this->authorize('users.show');

        $users = User::orderBy('last_name')->paginate(25);

        return UserResource::collection($users);
    }

    /**
     * Return the specific user.
     *
     * @param  \App\Models\User  $user
     * @return \App\Http\Resources\UserResource
     */
    public function show(User $user)
    {
        $this->authorize('users.show');

        return new UserResource($user);
    }

    /**
     * Store a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \App\Http\Resources\UserResource
     */
    public function store(Request $request)
    {
        $this->authorize('users.create');

        $rules = [
            'name'                  => 'required',
            'email'                 => 'required|email|unique:users,email',
            'password'              => 'required|min:8',
            'password_confirmation' => 'required|min:8|same:password',
            'status'                => 'required|boolean',
        ];

        if ($request->has('role')) {
            $rules['role'] = 'required';
        }

        $attributes = $request->validate($rules);

        $attributes['password'] = bcrypt($attributes['password']);

        $user = User::create($attributes);

        if (! empty($request->get('role'))) {
            $user->assignRoles($request->get('role'));
        }

        activity()
            ->performedOn($user)
            ->withProperties([
                'icon' => 'user',
                'link' => 'users/'.$user->id.'/edit',
            ])
            ->log('Created user account (:subject.name)');

        return new UserResource($user);
    }

    /**
     * Update an existing user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \App\Http\Resources\UserResource
     */
    public function update(Request $request, User $user)
    {
        $this->authorize('users.update');

        $rules = [
            'name'   => 'required',
            'email'  => 'required|email|unique:users,email,' . $user->id,
            'status' => 'required|boolean',
        ];

        if ($request->has('role')) {
            $rules['role'] = 'required';
        }

        $attributes = $request->validate($rules);

        // ---------------------------
        if (! empty($request->input('password'))) {
            fusion()->authorize()->post(
                'users/' . $user->id . '/password',
                $request->only([
                    'password',
                    'password_confirmation'
                ])
            );
        }
        // ---------------------------

        $user->update($attributes);

        if ($request->has('role')) {
            $user->syncRoles($request->get('role'));
        }

        activity()
            ->performedOn($user)
            ->withProperties([
                'icon' => 'user',
                'link' => 'users/'.$user->id.'/edit',
            ])
            ->log('Updated user account (:subject.name)');

        return new UserResource($user);
    }

    /**
     * Destroy an existing user.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $this->authorize('users.delete');

        activity()
            ->performedOn($user)
            ->withProperties([
                'icon' => 'user',
            ])
            ->log('Deleted user account (:subject.name)');

        event(new UserDeleted($user));

        $user->delete();
    }
}
