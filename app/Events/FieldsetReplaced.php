<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;

class FieldsetReplaced
{
    use Dispatchable, SerializesModels;

    /**
     * @var \App\Concerns\HasFieldset
     */
    public $table;

    /**
     * @var \App\Models\Fieldset
     */
    public $current;

    /**
     * @var \App\Models\Fieldset
     */
    public $previous;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($table, $current, $previous)
    {
        $this->table    = $table;
        $this->current  = $current;
        $this->previous = $previous;
    }
}
