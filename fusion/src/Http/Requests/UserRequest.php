<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\SecurePassword;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('users.' . ($this->method() === 'POST' ? 'create' : 'update'));
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
        $id = $this->user->id ?? null;

        $rules = [
            'name'              => 'required',
            'email'             => 'required|email|unique:users,email,' . $id,
            'role'              => 'sometimes|exists:roles,slug',
            'status'            => 'sometimes|boolean',
            'email_verified_at' => 'sometimes|required',

            'password_confirmation' => 'required_with:password|same:password',
        ];

        if ($this->method() === 'POST') {
            $rules['password'] = [ 'required', new SecurePassword ];
        } else {
            $rules['password'] = [ 'sometimes', 'required', new SecurePassword ];
        }

        return $rules;
    }
}
