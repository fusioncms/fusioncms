<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class DirectoryRequest extends FormRequest
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
            'parent_id' => $this->parent_id ?? 0,
            'slug'      => Str::slug($this->name),
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
            'name'      => 'required',
            'parent_id' => 'required|integer',
            'slug'      => Rule::unique('directories')->where(function ($query) {
                return $query
                    ->where('slug', $this->slug)
                    ->where('parent_id', $this->parent_id);
            }),
        ];
    }
}
