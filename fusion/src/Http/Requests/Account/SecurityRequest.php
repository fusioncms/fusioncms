<?php

namespace Fusion\Http\Requests\Account;

use Fusion\Rules\SecurePassword;
use Illuminate\Foundation\Http\FormRequest;

class SecurityRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->id == auth()->user()->id;
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
