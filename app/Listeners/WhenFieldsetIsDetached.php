<?php

namespace App\Listeners;

use App\Events\FieldsetDetached;
use Illuminate\Support\Facades\Schema;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

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
            $table  = $event->model->getTable();

            $columns = $fields->map(function($field) {
                return $field->handle;
            })->toArray();

            Schema::table($table, function ($blueprint) use ($columns) {
                $blueprint->dropColumn($columns);
            });
        }  
    }
}
