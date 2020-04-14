<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;
use Illuminate\Foundation\Http\FormRequest;

class MenuRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('menus.' . ($this->method() === 'POST' ? 'create' : 'update'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->menu->id ?? null;

        return [
            'name'        => 'required|regex:/^[A-z]/i',
            'handle'      => [ 'required', 'unique:menus,handle,' . $id, new NotAReservedKeyword ],
            'description' => 'sometimes',
        ];
    }
}
