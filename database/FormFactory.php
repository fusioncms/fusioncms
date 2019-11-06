<?php

use App\Models\Form;
use App\Models\Fieldset;
use App\Contracts\Factory;

class FormFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var \App\Models\Fieldset
     */
    protected $fieldset;

    /**
     * Create a new Form factory.
     * 
     * @return \App\Models\Form
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name'] = $this->name;
            $overrides['handle'] = str_handle($this->name);
        }

        if (! $this->fieldset) {
            $this->fieldset = factory(Fieldset::class)->create();
        }

        $form = factory(Form::class)->create($overrides);

        $form->attachFieldset($this->fieldset);

        return $form;
    }

    /**
     * Create a form with the given name.
     * 
     * @param  string  $name
     * @return \FormFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a form with the given fieldset.
     * 
     * @param  \App\Models\Fieldset  $fieldset
     * @return \FormFactory
     */
    public function withFieldset(Fieldset $fieldset)
    {
        $this->fieldset = $fieldset;

        return $this;
    }
}