<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\ValidModule;
use Fusion\Rules\UniqueModuleName;
use Illuminate\Foundation\Http\FormRequest;

class ModuleUploadRequest extends FormRequest
{
    /**
     * @var array
     */
    protected $acceptedMimes;

    /**
     *
     */
    public function __construct()
    {
        $this->acceptedMimes = ['zip'];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('modules.create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'file-upload' => [
                'required',
                'file',
                'mimes:' . implode(',', $this->acceptedMimes),
                new ValidModule,
                new UniqueModuleName,
            ]
        ];
    }
}
