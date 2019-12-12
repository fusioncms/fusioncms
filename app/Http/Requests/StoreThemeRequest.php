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

use App\Rules\ValidTheme;
use App\Rules\UniqueThemeName;
use Illuminate\Foundation\Http\FormRequest;

class StoreThemeRequest extends FormRequest
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
