<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Matrix;
use Fusion\Services\Builders\Collection;
use Illuminate\Foundation\Http\FormRequest;

class CollectionRequest extends FormRequest
{

    public function __construct()
    {
        $this->matrix        = Matrix::where('slug', request()->route('slug'))->firstOrFail();
        $this->model         = (new Collection($this->matrix->handle))->make();
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
        return $this->user()->can('entry.' . ($this->method() === 'POST' ? 'create' : 'update'));
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
            'matrix_id' => 'required|integer',
            'slug'      => 'unique:' . $this->model->getTable() . ',slug,' . request()->id,
            'status'    => 'required|boolean',
        ];

        if ($this->matrix->show_name_field) {
            $rules['name'] = 'required';
            $rules['slug'] .= '|required';
        }

        foreach ($this->fields as $field) {
            $rules[$field->handle] = $field->validation ?: 'sometimes';
        }

        return $rules;
    }
}
