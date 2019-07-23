<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Observers;

use App\Models\Field;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class FieldObserver
{
    /**
     * Handle the field "created" event.
     *
     * @param  \App\Models\Field  $field
     * @return void
     */
    public function created(Field $field)
    {
        $fieldset   = $field->section->fieldset;
        $containers = $this->getFieldsettables($fieldset);
        
        $fieldtype = fieldtypes()->get($field->type);
        $column    = $fieldtype->getColumn('type');
        $settings   = $fieldtype->getColumn('settings') ?? [];

        array_unshift($settings, $field->handle);

        if (! is_null($column)) {
            $containers->each(function($container) use ($column, $settings) {
                Schema::table($container->getTable(), function ($table) use ($column, $settings) {
                    call_user_func_array([$table, $column], $settings)->nullable();
                });
            });
        }
    }

    /**
     * Handle the field "updated" event.
     *
     * @param  \App\Models\Field  $field
     * @return void
     */
    public function updated(Field $field)
    {
        $fieldset   = $field->section->fieldset;
        $containers = $this->getFieldsettables($fieldset);

        $old = ['handle' => $field->getOriginal('handle'), 'column' => fieldtypes()->get($field->getOriginal('type'))->getColumn(), 'type' => $field->getOriginal('type')];
        $new = ['handle' => $field->handle, 'column' => fieldtypes()->get($field->type)->getColumn(), 'type' => $field->type];

        $oldFieldtype = json_encode($old['type']);
        $newFieldtype = json_encode($new['type']);

        $containers->each(function($container) use($old, $new, $oldFieldtype, $newFieldtype) {
            $table = $container->getTable();

            if ($old['handle'] !== $new['handle']) {
                $fieldtype = fieldtypes()->get($new['type']);
                $column    = $fieldtype->getColumn('type');

                if (! is_null($column)) {
                    Schema::table($table, function ($table) use ($old, $new) {
                        $table->renameColumn("`{$old['handle']}`", "`{$new['handle']}`");
                    });
                }
            }

            if ($oldFieldtype !== $newFieldtype) {
                $fieldtype = fieldtypes()->get($new['type']);
                $column    = $fieldtype->getColumn('type');
                $settings   = $fieldtype->getColumn('settings') ?? [];

                array_unshift($settings, $new['handle']);

                if (! is_null($column)) {
                    Schema::table($table, function ($table) use ($column, $settings) {
                        call_user_func_array([$table, $column], $settings)->change();
                    });
                }
            }
        });
    }

    /**
     * Handle the field "deleted" event.
     *
     * @param  \App\Models\Field  $field
     * @return void
     */
    public function deleted(Field $field)
    {
        $fieldset   = $field->section->fieldset;
        $containers = $this->getFieldsettables($fieldset);

        $containers->each(function($container) use ($field) {
            $table = $container->getTable();

            if (Schema::hasColumn($table, $field->handle)) {
                Schema::table($table, function ($table) use ($field) {
                    $table->dropColumn($field->handle);
                });
            }
        });
    }

    /**
     * Pure witchcraft. Fetches the related fieldsettables and resolves their
     * proper Eloquent models.
     * 
     * https://media.giphy.com/media/zIwIWQx12YNEI/giphy.gif
     * 
     * @param  Fieldset  $fieldset
     * @return \Illuminate\Support\Collection
     */
    protected function getFieldsettables($fieldset)
    {
        return DB::table('fieldsettables')->where('fieldset_id', $fieldset->id)->get()->map(function($morph) {
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
