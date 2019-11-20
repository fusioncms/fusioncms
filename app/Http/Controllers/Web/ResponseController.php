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
        $form  = Form::where('slug', $form)->first();
        $rules = [];

        if (! $form) {
            abort(404);
        }

        $fields = $form->fieldset->database();
        
        foreach ($fields as $field) {
            $rules[$field->handle] = $field->validation ?: 'sometimes';
        }

        $attributes            = $request->validate($rules);
        $attributes['form_id'] = $form->id;

        if ($form->collect_ip_addresses) {
            $attributes['identifiable_ip_address'] = request()->ip();
        }

        $response = $form->responses()->create($attributes);

        activity()
            ->performedOn($response)
            ->withProperties([
                'icon' => 'paper-plane',
                'link' => 'test',
            ])
            ->log('Submitted response to '.$form->name.' (:subject.identifiable_email_address)');

        if (! $form->redirect_on_submission) {
            $redirect = $form->thankyouPath();
        } else {
            $redirect = $form->redirect_url;
        }

        return redirect($redirect);
    }
}
