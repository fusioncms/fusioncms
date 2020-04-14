<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Form;
use Fusion\Services\Builders\Form as Builder;
use Illuminate\Foundation\Http\FormRequest;

class ResponseRequest extends FormRequest
{

    public function __construct()
    {
        $this->form     = Form::where('slug', request()->route('form'))->firstOrFail();
        $this->fieldset = $this->form->fieldset;
        $this->fields   = $this->fieldset ? $this->fieldset->database() : [];
    }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'form_id' => $this->form->id,
            'identifiable_ip_address' => $this->form->collect_ip_addresses ? request()->ip() : null,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'form_id'                 => 'required|integer',
            'identifiable_ip_address' => 'sometimes',
        ];

        foreach ($this->fields as $field) {
            $rules[$field->handle] = $field->validation ?: 'sometimes';
        }

        return $rules;
    }
}
