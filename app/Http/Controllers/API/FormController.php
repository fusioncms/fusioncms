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
use Illuminate\Http\Request;
use App\Http\Requests\FormRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\FormResource;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Support\Collection
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
     * @return \App\Http\Resources\FormResource
     */
    public function show(Form $form)
    {
        $this->authorize('forms.show');

        return new FormResource($form);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\FormRequest  $request
     * @return \App\Http\Resources\FormResource
     */
    public function store(FormRequest $request)
    {
        $form = Form::create($request->validated());

        return new FormResource($form);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\FormRequest  $request
     * @param  \App\Models\Form  $form
     * @return \App\Http\Resources\FormResource
     */
    public function update(FormRequest $request, Form $form)
    {
        $form->update($request->validated());

        return new FormResource($form);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Form  $form
     * @return void
     */
    public function destroy(Form $form)
    {
        $this->authorize('forms.delete');

        $form->delete();
    }
}
