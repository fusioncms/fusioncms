<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateEditPermissionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'        => 'required',
            'handle'      => 'required|regex:/^[a-z0-9\.]+$/|unique:permissions,handle,' . $this->get('id'),
            'description' => 'required',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required'        => 'Name is a required field.',
            'handle.required'      => 'Handle is a required field.',
            'handle.regex'         => 'Handle must be alphanumeric and can include periods.',
            'handle.unique'        => 'Handle value has already been taken.',
            'description.required' => 'Description is a required field.',
        ];
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
}
