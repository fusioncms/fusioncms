<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Http\FormRequest;

class FileUploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('files.create');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->upload = request()->file('file');

        if ($this->upload) {
            $uuid      = unique_id();
            $directory = is_numeric($this->directory_id) ? $this->directory_id : 0;
            $extension = $this->upload->extension();
            $bytes     = $this->upload->getSize();
            $mimetype  = $this->upload->getClientMimeType();
            $name      = pathinfo($this->upload->getClientOriginalName(), PATHINFO_FILENAME);
            $slug      = Str::slug("{$uuid}-{$name}");
            $original  = Str::slug($name) . ".{$extension}";
            $location  = Storage::disk('public')->putFileAs('files', $this->upload, "{$slug}.{$extension}");

            if (Str::startsWith($mimetype, 'image')) {
                list($width, $height) = getimagesize($this->upload);
            }

            $this->merge([
                'directory_id' => $directory,
                'uuid'         => $uuid,
                'name'         => $name,
                'slug'         => $slug,
                'extension'    => $extension,
                'bytes'        => $bytes,
                'original'     => $original,
                'mimetype'     => $mimetype,
                'location'     => $location,
                'width'        => $width ?? null,
                'height'       => $height ?? null,
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
            'directory_id' => 'required|integer',
            'uuid'         => 'required',
            'name'         => 'required',
            'slug'         => 'required',
            'description'  => 'sometimes',
            'extension'    => 'required',
            'bytes'        => 'required|integer',
            'original'     => 'required',
            'mimetype'     => 'required',
            'location'     => 'required',
            'width'        => 'sometimes',
            'height'       => 'sometimes',
        ];
    }
}
