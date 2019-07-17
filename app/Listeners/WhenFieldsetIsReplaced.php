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

        Schema::table($event->table, function ($blueprint) use ($columns) {
            $blueprint->dropColumn($columns);
        });
    }
}
