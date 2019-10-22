<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web\Settings;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PersonalTokenController extends Controller
{
	public function __construct()
	{
		if (setting('api.personal_access_tokens') !== 'enabled') {
			abort(404);
		}
	}

    /**
     * @param  Request  $request
     * @return mixed
     */
    public function edit(Request $request)
    {
        return view('settings.personal-token');
    }
}
