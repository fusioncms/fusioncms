<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Models\Form;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;

class ThankyouController extends Controller
{
    public function index(Request $request, $form)
    {
        $form = Form::where('slug', $form)->first();

        if (! $form) {
            abort(404);
        }

        return view(($form->thankyou_template ?: 'forms.thankyou'), compact('form'));
    }
}