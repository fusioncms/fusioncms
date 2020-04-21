<?php

namespace Fusion\Listeners;

use Fusion\Events\FieldsetAttached;
use Illuminate\Support\Facades\Schema;

class WhenFieldsetIsAttached
{
    /**
     * Handle the event.
     *
     * @param  FieldsetAttached  $event
     * @return void
     */
    public function handle(FieldsetAttached $event)
    {
        $fields = $event->fieldset->fields;

        foreach ($fields as $field) {
            $fieldtype = fieldtypes()->get($field->type);
            $column    = $fieldtype->getColumn('type');
            $settings  = $fieldtype->getColumn('settings') ?? [];
            $table     = $event->model->getTable();

            array_unshift($settings, $field->handle);

            if ($this->shouldCreateTableColumn($table, $column, $settings)) {
                Schema::table($table, function ($blueprint) use ($column, $settings) {
                    call_user_func_array([$blueprint, $column], $settings)->nullable();
                });
            }
        }
    }

    /**
     * Determine if the column should be created or not.
     *
     * @param
     * @return boolean
     */
    protected function shouldCreateTableColumn($table, $column, $settings)
    {
        $name = $settings[0];

        if (is_null($column)) {
            return false;
        }

        return !Schema::hasColumn($table, $name);
    }
}
