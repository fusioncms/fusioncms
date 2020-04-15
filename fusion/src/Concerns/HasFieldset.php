<?php

namespace Fusion\Concerns;

use Fusion\Models\Fieldset;
use Fusion\Events\FieldsetAttached;
use Fusion\Events\FieldsetDetached;
use Fusion\Events\FieldsetReplaced;
use Illuminate\Support\Facades\DB;

trait HasFieldset
{
    abstract public function getBuilder();

    /**
     * Attach a fieldset to the model.
     *
     * @param  Fieldset|int  $value
     * @return void
     */
    public function attachFieldset($value)
    {
        if ($value instanceof Fieldset) {
            $fieldset = $value;
        } else {
            $fieldset = Fieldset::findOrFail($value);
        }

        $previous = $this->fieldset();

        $this->fieldsets()->sync($fieldset->id);

        event(new FieldsetAttached($this));

        if (! is_null($previous)) {
            $table    = $this->getBuilder()->getTable();
            $current = $fieldset->fields->map(function($field) {
                return $field->handle;
            });

            $previous = $previous->fields->map(function($field) {
                return $field->handle;
            });

            event(new FieldsetReplaced($table, $current, $previous));
        }
    }

    /**
     * Detach assigned fieldset from the model.
     *
     * @return void
     */
    public function detachFieldset()
    {
        event(new FieldsetDetached($this));

        return $this->fieldsets()->detach();
    }

    /**
     * Fetch the model's fieldset.
     *
     * @return \Fusion\Models\Fieldset
     */
    public function fieldset()
    {
        return $this->fieldsets()->first();
    }

    /**
     * Fetch the model's fieldset as an attribute value.
     *
     * @return \Fusion\Models\Fieldset
     */
    public function getFieldsetAttribute()
    {
        return $this->fieldset();
    }

    /**
     * A model can "technically" have many fieldsets, but we're only
     * going to be assigning one.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function fieldsets()
    {
        return $this->morphToMany(Fieldset::class, 'fieldsettable');
    }

    protected function getFieldsettables()
    {
        return DB::table('fieldsettables')->where('fieldset_id', $this->fieldset->id)->get()->map(function($morph) {
            $model = app()->make($morph->fieldsettable_type);
            $model = $model->find($morph->fieldsettable_id);

            return $model;
        })->reject(function($model) {
            return is_null($model);
        })->map(function($model) {
            return $model->getBuilder();
        });
    }
}
