<?php

use App\Models\Taxonomy;
use App\Models\Fieldset;
use App\Contracts\Factory;
use Illuminate\Support\Str;

class TaxonomyFactory implements Factory
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
     * For applying factory states..
     * 
     * @var array
     */
    protected $states;

    /**
     * Create a new Taxonomy factory.
     * 
     * @return \App\Models\Taxonomy
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = str_handle($this->name);
            $overrides['slug']   = Str::slug($this->name);
        }

        if (! $this->fieldset) {
            $this->fieldset = factory(Fieldset::class)->create();
        }

        if ($this->states) {
            $taxonomy = factory(Taxonomy::class)->states($this->states)->create($overrides);
        } else {
            $taxonomy = factory(Taxonomy::class)->create($overrides);
        }

        $taxonomy->attachFieldset($this->fieldset);

        return $taxonomy;
    }

    /**
     * Create a taxonomy with the given name.
     * 
     * @param  string  $name
     * @return \TaxonomyFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a taxonomy with the given fieldset.
     * 
     * @param  \App\Models\Fieldset  $fieldset
     * @return \TaxonomyFactory
     */
    public function withFieldset(Fieldset $fieldset)
    {
        $this->fieldset = $fieldset;

        return $this;
    }

    /**
     * Add states to Taxonomy.
     * 
     * @param  array  $states
     * @return \TaxonomyFactory
     */
    public function withStates(array $states)
    {
        $this->states = $states;

        return $this;
    }
}