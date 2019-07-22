<?php

namespace App\Listeners;

use App\Events\FieldsetAttached;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class WhenFieldsetIsAttached
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

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
            $settings   = $fieldtype->getColumn('settings') ?? [];
            $table     = $event->model->getTable();

            array_unshift($settings, $field->handle);

            if ($this->shouldCreateTableColumn($table, $column, $settings)) {
                Schema::table($table, function ($blueprint) use ($column, $options) {
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

        if (Schema::hasColumn($table, $name)) {
            return false;
        }

        return true;
    }
}
