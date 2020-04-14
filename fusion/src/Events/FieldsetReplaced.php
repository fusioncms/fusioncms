<?php

namespace Fusion\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;

class FieldsetReplaced
{
    use Dispatchable, SerializesModels;

    /**
     * @var \Fusion\Concerns\HasFieldset
     */
    public $table;

    /**
     * @var \Fusion\Models\Fieldset
     */
    public $current;

    /**
     * @var \Fusion\Models\Fieldset
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
