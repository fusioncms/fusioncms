<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class MatrixRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('matrices.' . ($this->method() === 'POST' ? 'create' : 'update'));
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'slug' => $this->slug ?? Str::slug($this->name),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'parent_id'          => 'sometimes|not_in:' . $this->id,
            'name'               => 'required|regex:/^[A-z]/i',
            'handle'             => 'required|unique:matrices,handle,' . $this->id,
            'slug'               => 'required|unique:matrices,slug,' . $this->id,
            'description'        => 'sometimes',
            'type'               => 'required',
            'fieldset'           => 'sometimes',

            'reference_singular' => 'sometimes',
            'reference_plural'   => 'sometimes',

            'sidebar'            => 'required|boolean',
            'quicklink'          => 'required|boolean',
            'icon'               => 'sometimes',

            'show_name_field'    => 'required|boolean',
            'name_label'         => 'sometimes',
            'name_format'        => 'required_if:show_name_field,false',

            'route'              => 'sometimes',
            'template'           => 'sometimes',

            'revision_control'   => 'required|boolean',
            'publishable'        => 'required|boolean',
        ];
    }
}
