<?php

namespace Modules\MockModule\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AcmeRequest extends FormRequest
{
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
            'status' => $this->status ?? true,
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
            'name'        => 'required',
            'handle'      => 'required|unique:mock_module_acme,handle,' . $this->id,
            'description' => 'sometimes',
            'status'      => 'required|boolean',
        ];
    }
}
