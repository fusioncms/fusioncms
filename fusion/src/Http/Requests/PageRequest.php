<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Matrix;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Fusion\Services\Builders\Page;
use Illuminate\Foundation\Http\FormRequest;

class PageRequest extends FormRequest
{

    public function __construct()
    {
        $this->matrix        = Matrix::findOrFail(request()->route('page'));
        $this->model         = (new Page($this->matrix->handle))->make();
        $this->fieldset      = $this->matrix->fieldset;
        $this->fields        = $this->fieldset ? $this->fieldset->database() : [];
        $this->relationships = $this->fieldset ? $this->fieldset->relationships() : [];
    }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('entry.update');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'matrix_id' => $this->matrix->id
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'matrix_id' => 'required',
            'name'      => 'required',
            'slug'      => 'required',
            'status'    => 'required|boolean',
        ];

        foreach ($this->fields as $field) {
            $rules[$field->handle] = $field->validation ?: 'sometimes';
        }

        return $rules;
    }
}
