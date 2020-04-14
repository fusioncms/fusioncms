<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Str;
use Fusion\Rules\NotAReservedKeyword;
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
        $id = $this->matrix->id ?? null;

        return [
            'parent_id'          => 'sometimes|not_in:' . $id,
            'name'               => 'required|regex:/^[A-z]/i',
            'handle'             => [ 'required', 'unique:matrices,handle,' . $id, new NotAReservedKeyword ],
            'slug'               => 'required|unique:matrices,slug,' . $id,
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

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->has('slug')) {
                $validator->errors()->add('name', 'The name has already been taken.');
            }
        });
    }
}
