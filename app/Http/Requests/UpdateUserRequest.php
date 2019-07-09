<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user   = User::find($this->route('id'));
        $fields = $user->fields->where('status', 1);

        $rules = collect([
            'name'     => 'required',
            'email'    => 'required|email|unique:users,email,' . $this->route('id'),
            'password' => 'min:8',
        ]);

        if ($this->get('password')) {
            $rules = $rules->merge(['password_confirmation' => 'required|min:8|same:password']);
        }

        foreach ($fields as $field) {
            $fieldtype = fieldtypes()->get($field->type);
            $rules     = $rules->merge($fieldtype->rules(request($field->handle), $field));
        }

        return $rules->toArray();
    }

    /**
     * Set custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        $attributes = collect();

        $user   = User::find($this->route('id'));
        $fields = $user->fields->where('status', 1);

        foreach ($fields as $field) {
            $fieldtype  = fieldtypes()->get($field->type);
            $attributes = $attributes->merge($fieldtype->attributes(request($field->handle), $field));
        }

        return $attributes->toArray();
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
