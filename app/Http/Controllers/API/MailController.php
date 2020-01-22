<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use App\Mail\WelcomeNewUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

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