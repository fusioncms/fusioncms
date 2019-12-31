<?php

namespace App\Listeners;

use App\Events\FieldsetReplaced;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class WhenFieldsetIsReplaced
{
    /**
     * Handle the event.
     *
     * @param  FieldsetReplaced  $event
     * @return void
     */
    public function handle(FieldsetReplaced $event)
    {
        $columns = $event->previous->diff($event->current)->toArray();

        foreach ($columns as $column) {
            if ($this->shouldDeleteTableColumn($event->table, $column)){
                Schema::table($event->table, function ($blueprint) use ($column) {
                    $blueprint->dropColumn($column);
                });
            }
        }
    }

    /**
     * Determine if the column should be deleted or not.
     * 
     * @param 
     * @return boolean
     */
    protected function shouldDeleteTableColumn($table, $column)
    {

        if (is_null($column)) {
            return false;
        }

        if (Schema::hasColumn($table, $column)) {
            return true;
        }

        return true;
    }
}
