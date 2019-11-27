<?php

namespace App\Http\Controllers\Web;

use App\Models\Form;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ThankyouController extends Controller
{
    public function __invoke(Request $request, $form)
    {
        $form = Form::where('slug', $form)->first();

        if (! $form) {
            abort(404);
        }

        return view(($form->thankyou_template ?: 'forms.thankyou'), compact('form'));
    }
}