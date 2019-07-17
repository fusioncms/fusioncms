<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;

class FieldsetDetached
{
    use Dispatchable, SerializesModels;

    /**
     * @var \App\Concerns\HasFieldset
     */
    public $model;

    /**
     * @var \App\Models\Fieldset
     */
    public $fieldset;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($model)
    {
        $this->model    = $model->getBuilder();
        $this->fieldset = $model->fieldset;
    }
}
