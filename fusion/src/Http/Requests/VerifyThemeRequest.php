<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\ValidTheme;
use Fusion\Rules\UniqueThemeName;
use Illuminate\Foundation\Http\FormRequest;

class VerifyThemeRequest extends FormRequest
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
                new ValidTheme,
                new UniqueThemeName,
            ]
        ];
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
