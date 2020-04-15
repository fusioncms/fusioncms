<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Mail\WelcomeNewUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Fusion\Http\Controllers\Controller;

class MailController extends Controller
{
	/**
     * Display a listing of the resource.
     *
     * @param  Request $request
     * @return Collection
     */
    public function index(Request $request)
    {
    	$this->authorize('mail.index');

        Mail::to(auth()->user())
            ->send(new WelcomeNewUser(auth()->user()));
    }
}