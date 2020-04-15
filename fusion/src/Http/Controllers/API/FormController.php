<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Form;
use Illuminate\Http\Request;
use Fusion\Http\Requests\FormRequest;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\FormResource;

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
     * @param  \Fusion\Models\Form  $form
     * @return \Fusion\Http\Resources\FormResource
     */
    public function show(Form $form)
    {
        $this->authorize('forms.show');

        return new FormResource($form);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Fusion\Http\Requests\FormRequest  $request
     * @return \Fusion\Http\Resources\FormResource
     */
    public function store(FormRequest $request)
    {
        $form = Form::create($request->validated());

        return new FormResource($form);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\FormRequest  $request
     * @param  \Fusion\Models\Form  $form
     * @return \Fusion\Http\Resources\FormResource
     */
    public function update(FormRequest $request, Form $form)
    {
        $form->update($request->validated());

        return new FormResource($form);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Fusion\Models\Form  $form
     * @return void
     */
    public function destroy(Form $form)
    {
        $this->authorize('forms.delete');

        $form->delete();
    }
}
