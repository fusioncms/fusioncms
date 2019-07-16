<?php

use App\Models\Field;
use App\Contracts\Factory;
use Facades\SectionFactory;

class FieldFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * Create a new Field factory.
     * 
     * @return \App\Models\Fieldset
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name'] = $this->name;
            $overrides['handle'] = str_handle($this->name);
        }

        $field = factory(Field::class)->create($overrides);

        return $field;
    }

    /**
     * Create a matrix with the given name.
     * 
     * @param  string  $name
     * @return \MatrixFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }
}