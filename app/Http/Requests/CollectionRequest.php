<?php

namespace App\Http\Requests;

use App\Models\Matrix;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Services\Builders\Collection;
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
            'name'      => 'sometimes',
            'slug'      => 'sometimes|unique:' . $this->model->getTable() . ',slug,' . request()->id,
            'status'    => 'required|boolean',
        ];

        foreach ($this->fields as $field) {
            $rules[$field->handle] = $field->validation ?: 'sometimes';
        }

        return $rules;
    }
}
