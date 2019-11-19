<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web;

use App\Models\Form;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ResponseController extends Controller
{
    /**
     * Show the home index screen.
     *
     * @return Theme
     */
    public function store(Request $request, $form)
    {
        $form = Form::where('slug', $form)->first();

        if (! $form) {
            abort(404);
        }

        
    }
}
