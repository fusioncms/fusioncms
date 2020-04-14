<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class FieldsetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('fieldsets.' . ($this->method() === 'POST' ? 'create' : 'update'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->fieldset->id ?? null;

        return [
            'name'   => 'required',
            'handle' => 'required|unique:fieldsets,handle,' . $id,
        ];
    }
}
