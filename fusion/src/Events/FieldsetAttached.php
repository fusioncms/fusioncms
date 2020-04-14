<?php

namespace Fusion\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;

class FieldsetAttached
{
    use Dispatchable, SerializesModels;

    /**
     * @var \Fusion\Concerns\HasFieldset
     */
    public $model;

    /**
     * @var \Fusion\Models\Fieldset
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
