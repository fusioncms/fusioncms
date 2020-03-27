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
use App\Http\Controllers\Controller;
use App\Http\Requests\ResponseRequest;

class ResponseController extends Controller
{
    /**
     * Show the home index screen.
     *
     * @param \App\Http\Requests\ResponseRequest  $request
     * @param  string  $form
     * @return Theme
     */
    public function store(ResponseRequest $request, $form)
    {
        $form     = $request->form->fresh();
        $response = $form->responses()->create($request->validated());

        activity()
            ->performedOn($response)
            ->withProperties([
                'icon' => 'paper-plane',
                'link' => 'test',
            ])
            ->log('Submitted response to ' . $form->name . ' (' . $response->identifiable_email_address . ')');

        if (! $form->redirect_on_submission) {
            $redirect = $form->thankyouPath();
        } else {
            $redirect = $form->redirect_url;
        }

        return redirect($redirect);
    }
}
