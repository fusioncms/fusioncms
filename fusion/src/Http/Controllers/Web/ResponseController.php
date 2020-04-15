<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Models\Form;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ResponseRequest;

class ResponseController extends Controller
{
    /**
     * Show the home index screen.
     *
     * @param \Fusion\Http\Requests\ResponseRequest  $request
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
