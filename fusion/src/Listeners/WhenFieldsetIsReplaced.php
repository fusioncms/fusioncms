<?php

namespace Fusion\Listeners;

use Fusion\Events\FieldsetReplaced;
use Illuminate\Support\Facades\Schema;

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

        return Schema::hasColumn($table, $column);
    }
}
