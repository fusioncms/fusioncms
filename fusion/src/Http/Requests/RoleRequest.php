<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('roles.' . ($this->method() === 'POST' ? 'create' : 'update'));
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'special' => $this->special ?? null,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->role->id ?? null;

        return [
            'name'        => 'required|unique:roles,name,' . $id,
            'slug'        => 'required|unique:roles,slug,' . $id,
            'description' => 'sometimes',
            'special'     => 'sometimes|nullable',
        ];
    }
}
