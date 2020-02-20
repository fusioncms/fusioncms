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

use App\Models\Form;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FormResource;

class FormController extends Controller
{
    /**
     * Validation rules used for create and update
     * actions.
     *
     * @var array
     */
    protected $rules = [
        'name'                    => 'required|regex:/^[A-z]/i',
        'handle'                  => 'required',
        'description'             => 'sometimes',
        'collect_email_addresses' => 'sometimes',
        'collect_ip_addresses'    => 'sometimes',
        'response_receipt'        => 'sometimes',

        'message'                 => 'sometimes',
        'redirect_on_submission'  => 'sometimes',
        'redirect_url'            => 'sometimes',

        'enable_recaptcha'        => 'sometimes',
        'enable_honeypot'         => 'sometimes',

        'send_to'                 => 'sometimes',
        'reply_to'                => 'sometimes',

        'form_template'           => 'sometimes',
        'thankyou_template'       => 'sometimes',

        'status'                  => 'required',
    ];

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('forms.show');

        $forms = Form::orderBy('name')->paginate(25);

        return FormResource::collection($forms);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Form  $form
     * @return \Illuminate\Http\Response
     */
    public function show(Form $form)
    {
        $this->authorize('forms.show');

        return new FormResource($form);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('forms.create');

        $attributes = collect($request->validate($this->rules));

        $attributes->put('slug', Str::slug($attributes->get('handle'), '-'));

        $form = Form::create($attributes->all());

        activity()
            ->performedOn($form)
            ->withProperties([
                'icon' => 'paper-plane',
                'link' => 'forms/'.$form->id.'/edit',
            ])
            ->log('Created form (:subject.name)');

        return new FormResource($form);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Form  $form
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Form $form)
    {
        $this->authorize('forms.update');

        $attributes = collect($request->validate($this->rules));
        $attributes->put('slug', Str::slug($attributes->get('handle'), '-'));

        $form->update($attributes->all());

        activity()
            ->performedOn($form)
            ->withProperties([
                'icon' => 'paper-plane',
                'link' => 'forms/'.$form->id.'/edit',
            ])
            ->log('Updated form (:subject.name)');

        return new FormResource($form);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Form  $form
     * @return \Illuminate\Http\Response
     */
    public function destroy(Form $form)
    {
        $this->authorize('forms.delete');

        activity()
            ->performedOn($form)
            ->withProperties([
                'icon' => 'paper-plane',
            ])
            ->log('Deleted form (:subject.name)');

        $form->delete();
    }
}
