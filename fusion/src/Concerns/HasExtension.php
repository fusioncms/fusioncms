<?php

namespace Fusion\Concerns;

use Illuminate\Support\Str;
use Fusion\Models\Extension;
use Fusion\Database\Eloquent\Relations\HasOneExtension;

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
     * @return \Fusion\Database\Eloquent\Relations\HasOneExtension
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
     * @return \Fusion\Models\Fieldset
     */
    public function getFieldsetAttribute()
    {
        return $this->extension->fieldset;
    }
}
