<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Str;
use Fusion\Rules\NotAReservedKeyword;
use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;

class FormRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('forms.' . ($this->method() === 'POST' ? 'create' : 'update'));
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
        $id = $this->form->id ?? null;

        return [
            'name'                    => 'required|regex:/^[A-z]/i',
            'handle'                  => [ 'required', 'unique:forms,handle,' . $id, new NotAReservedKeyword ],
            'slug'                    => 'required|unique:forms,slug,' . $id,
            'description'             => 'sometimes',
            'collect_email_addresses' => 'sometimes',
            'collect_ip_addresses'    => 'sometimes',
            'response_receipt'        => 'sometimes',

            'message'                 => 'sometimes',
            'redirect_on_submission'  => 'sometimes',
            'redirect_url'            => 'sometimes',

            'enable_recaptcha'        => 'sometimes',
            'enable_honeypot'         => 'sometimes',

            'send_to'                 => 'sometimes',
            'reply_to'                => 'sometimes',

            'form_template'           => 'sometimes',
            'thankyou_template'       => 'sometimes',

            'status'                  => 'required',
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
