<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\SecurePassword;
use Illuminate\Foundation\Http\FormRequest;

class PasswordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('users.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'password'              => [ 'required', new SecurePassword ],
            'password_confirmation' => 'required|same:password',
        ];
    }
}
