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
            $options   = $fieldtype->getColumn('options') ?? [];

            array_unshift($options, $field->handle);

            if (! is_null($column)) {
                Schema::table($event->model->getTable(), function ($table) use ($column, $options) {
                    call_user_func_array([$table, $column], $options)->nullable();
                });
            }
        }
    }
}
