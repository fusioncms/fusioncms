<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class TaxonomyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('taxonomies.' . ($this->method() === 'POST' ? 'create' : 'update'));
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
        $id = $this->taxonomy->id ?? null;

        return [
            'name'        => 'required|regex:/^[A-z]/i',
            'handle'      => 'required|unique:taxonomies,handle,' . $id,
            'slug'        => 'required|unique:taxonomies,slug,' . $id,
            'description' => 'sometimes',
            'fieldset'    => 'sometimes',

            'sidebar'     => 'required|boolean',
            'icon'        => 'sometimes',

            'route'       => 'sometimes',
            'template'    => 'sometimes',
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
