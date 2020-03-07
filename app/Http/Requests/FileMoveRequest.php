<?php

namespace App\Http\Requests;

use App\Models\Directory;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class FileMoveRequest extends FormRequest
{
    /**
     * Comma separated list of slugs.
     * 
     * @var array
     */
    protected $slugs = [];

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('files.move');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'directory'   => $this->directory ?? 0,
            'files'       => $this->moving['files'] ?? [],
            'directories' => $this->moving['directories'] ?? [],
        ]);

        $this->slugs = Directory::whereIn('id', $this->directories)->pluck('slug');

        // dd(\DB::table('directories')->where('parent_id', $this->directory)->whereIn('slug', $this->slugs)->get());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'slug' => Rule::unique('directories')
                ->where(function ($query) {
                    return $query
                        ->whereNotIn('slug', $this->slugs)
                        ->where('parent_id', $this->directory);
                })
        ];
    }
}
