<?php

namespace App\Http\Controllers\Web\Account;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\Account\SecurityRequest;

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
     * Update storage record.
     * 
     * @param  \App\Http\Requests\Account\SecurityRequest $request
     * @return Redirect
     */
    public function update(SecurityRequest $request)
    {
        $attributes = $request->validated();
        
        auth()->user()->update([
            'password'            => bcrypt($attributes['password']),
            'password_changed_at' => now(),
        ]);

        return back()->with('success','Password successfully updated!');
    }
}
