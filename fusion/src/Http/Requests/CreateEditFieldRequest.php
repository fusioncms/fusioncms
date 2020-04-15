<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Field;
use Illuminate\Foundation\Http\FormRequest;

class CreateEditFieldRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id             = $this->get('id');
        $fieldableId    = $this->route('fieldableId');
        $fieldableType  = $this->route('fieldableType');
        $fieldtypeRules = fieldtypes()->get($this->type)->rules;

        /*
         * Reserved keywords.
         */
        if ($fieldableType == 'matrix') {
            $reserved = 'id,name,handle,slug,route,template';
        } else {
            $reserved = '';
        }

        $fieldableType = Field::$fieldableLookup[$fieldableType]['class'];

        $rules = [
            'name'   => "required|unique:fields,name,$id,id,fieldable_id,$fieldableId,fieldable_type,$fieldableType",
            'handle' => "required|regex:/^[a-z0-9_]+$/|not_in:$reserved|unique:fields,handle,$id,id,fieldable_id,$fieldableId,fieldable_type,$fieldableType",
            'type'   => 'required',
        ];

        return array_merge($rules, $fieldtypeRules);
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        $fieldtypeRules = fieldtypes()->get($this->type)->messages;
        $messages       = [
            'name.required'   => 'Name is a required field.',
            'name.unique'     => 'Name value has already been taken.',
            'handle.required' => 'Handle is a required field.',
            'handle.regex'    => 'Handle must be alphanumeric and can include underscores.',
            'handle.unique'   => 'Handle value has already been taken.',
            'handle.not_in'   => 'Handle must not conflict with reserved values (e.g. id, name, handle, slug, route, or template).',
            'type.required'   => 'Field type is a required field.',
        ];

        return array_merge($messages, $fieldtypeRules);
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
