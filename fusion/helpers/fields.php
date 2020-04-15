<?php

use Illuminate\Support\HtmlString;

if (! function_exists('fieldtypes')) {
    /**
     * Returns the fieldtype registry instance from the container.
     *
     * @return \Fusion\Fieldtypes\Registry
     */
    function fieldtypes()
    {
        return app()->make(Fusion\Fieldtypes\Registry::class);
    }
}

if (! function_exists('validationRules')) {
    /**
     * Get list of validation rules to apply against Field Assignments.
     *
     * @param   array  $validation
     *
     * @return  array
     */
    function validationRules($validation)
    {
        $rules = [];

        foreach ($validation ?: [] as $field => $value) {
            // Ignore disabled validation rules..
            if ($value == '') {
                continue;
            }

            /*
            * For single keyword rules like:
            * - required
            * - file
            */
            if ($field === $value) {
                $rules[] = $value;

            /*
            * Rule: 'dimensions'
            */
            } elseif ($field == 'dimensions') {
                $dimensions   = [];
                $dimensions[] = isset($value['min_width']) ? 'min_width=' . $value['min_width'] : '';
                $dimensions[] = isset($value['min_height']) ? 'min_height=' . $value['min_height'] : '';

                if (count($dimensions) > 0) {
                    $rules[] = 'dimensions:' . implode(',', $dimensions);
                }

                /*
                * Rule: 'file_min'
                * File size requirements
                */
            } elseif ($field == 'file_min') {
                $bytes     = convert_to_bytes($value);
                $kilobytes = byte_converter($bytes, 'B', 'KB');
                $rules[]   = 'min:' . $kilobytes;

            /*
            * Rule: 'file_max'
            * File size requirements
            */
            } elseif ($field == 'file_max') {
                $bytes     = convert_to_bytes($value);
                $kilobytes = byte_converter($bytes, 'B', 'KB');
                $rules[]   = 'max:' . $kilobytes;
            } else {
                $rules[] = $field . ':' . $value;
            }
        }

        return array_filter($rules);
    }
}

if (! function_exists('fieldtypes_field')) {
    /**
     * Generate a hidden fieldtypes form field to inform the CMS to resolve
     * custom fields against the request.
     *
     * @return \Illuminate\Support\HtmlString
     */
    function fieldtypes_field()
    {
        return new HtmlString('<input type="hidden" name="_fieldtypes" value="true">');
    }
}

if (! function_exists('resolve_fieldable')) {
    /**
     * Resolve fieldable model.
     *
     * @param  string   $type
     * @param  int  $id
     * @return \Fusion\Database\Eloquent\Model
     */
    function resolve_fieldable($type, $id)
    {
        return app()->make(Fusion\Models\Field::$fieldableLookup[$type]['class'])->findOrFail($id);
    }
}
