<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Concerns;

use App\Models\Fieldset;
use App\Events\FieldsetAttached;
use App\Events\FieldsetDetached;
use App\Events\FieldsetReplaced;
use Illuminate\Support\Facades\DB;

trait HasFieldset
{
    abstract public function getBuilder();

    /**
     * Attach a fieldset to the model.
     * 
     * @param  \App\Models\Fieldset  $fieldset
     * @return void
     */
    public function attachFieldset($fieldset)
    {
        $previous = $this->fieldset();
        
        $this->fieldsets()->sync($fieldset);
        
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
     * @return \App\Models\Fieldset
     */
    public function fieldset()
    {
        return $this->fieldsets()->first();
    }
    
    /**
     * Fetch the model's fieldset as an attribute value.
     * 
     * @return \App\Models\Fieldset
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
