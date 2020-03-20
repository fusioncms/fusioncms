<?php

namespace App\Http\Controllers\Web\Account;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Account\SettingRequest;

class SettingController extends Controller
{
    /**
     * Simple redirect to the edit route.
     * 
     * @return Response
     */
    public function index()
    {
        return redirect('account/settings');
    }

    /**
     * Show the specific resource.
     * 
     * @param  \Illuminate\Http\Request $request
     * @return View
     */
    public function edit(Request $request)
    {
        return view('account.settings');
    }

    /**
     * Update an existing resource in storage.
     * 
     * @param  \App\Http\Requests\Account\SettingRequest $request
     * @return Redirect
     */
    public function update(SettingRequest $request)
    {
        auth()->user()->update($request->validated());

        return back()->with('success','Account successfully updated!');
    }
}
