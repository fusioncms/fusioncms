<?php

namespace Fusion\Listeners;

use Fusion\Events\FieldsetDetached;
use Illuminate\Support\Facades\Schema;

class WhenFieldsetIsDetached
{
    /**
     * Handle the event.
     *
     * @param  FieldsetDetached  $event
     * @return void
     */
    public function handle(FieldsetDetached $event)
    {
        if($event->fieldset) {
            $fields = $event->fieldset->fields;
            $table     = $event->model->getTable();

            foreach($fields as $field) {
                $fieldtype = fieldtypes()->get($field->type);
                $column    = $fieldtype->getColumn('type');
                $settings  = $fieldtype->getColumn('settings') ?? [];
                $name      = $field->handle;

                array_unshift($settings, $field->handle);

                if ($this->shouldDeleteTableColumn($table, $column, $name)) {
                    Schema::table($table, function ($blueprint) use ($name) {
                        $blueprint->dropColumn($name);
                    });
                }
            }
        }
    }

    /**
     * Determine if the column should be deleted or not.
     *
     * @param
     * @return boolean
     */
    protected function shouldDeleteTableColumn($table, $column, $name)
    {
        if (is_null($column)) {
            return false;
        }

        return Schema::hasColumn($table, $name);
    }
}
