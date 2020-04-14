<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Http\FormRequest;

class FileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('files.update');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        // Handle name change..
        if ($this->name !== $this->file->name) {
            $name     = Str::slug($this->name);
            $slug     = Str::slug("{$this->file->uuid}-{$this->name}");
            $original = str_replace($this->file->name, $name, $this->file->original);
            $location = str_replace(Str::slug($this->file->name), $name, $this->file->location);

            // Rename file..
            Storage::disk('public')->move($this->file->location, $location);

            $this->merge([
                'slug'     => $slug,
                'original' => $original,
                'location' => $location,
            ]);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'         => 'required',
            'description'  => 'sometimes',
            'slug'         => 'sometimes',
            'original'     => 'sometimes',
            'location'     => 'sometimes',
        ];
    }
}
