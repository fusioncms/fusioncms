<?php

namespace App\Concerns;

use App\Models\Extension;
use Illuminate\Support\Str;
use App\Services\Relations\HasOneExtension;

trait HasExtension
{
    public static function bootHasExtension()
    {
        // Update extension fields with request..
        static::updated(function ($model) {
            $model->extension->update(
                collect($model->fields)->mapWithKeys(function($field) {
                    return [$field->handle => request()->get($field->handle, $field->default)];
                })->all()
            );
        });
    }

    /**
     * Get extending relationship.
     * 
     * @return \App\Services\Relations\HasOneExtension
     */
    public function extension()
    {
        return new HasOneExtension($this);
    }

    /**
     * Get extending fields.
     * 
     * @return Collection
     */
    public function getFieldsAttribute()
    {
        return $this->extension->fields;
    }

    /**
     * Get extending fieldset.
     * 
     * @return \App\Models\Fieldset
     */
    public function getFieldsetAttribute()
    {
        return $this->extension->fieldset;
    }
}
