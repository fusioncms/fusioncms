<?php

use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Contracts\Factory;
use Facades\SectionFactory;
use Illuminate\Support\Str;

class FieldsetFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var \Fusion\Models\Section
     */
    protected $sections;

    /**
     * Create a new Fieldset factory.
     *
     * @return \Fusion\Models\Fieldset
     */
    public function create()
    {
        $fieldset = factory(Fieldset::class)->create();

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = Str::slug($this->name, '_');
        }

        if (! $this->sections) {
            $this->sections = SectionFactory::times(3)->create();
        }

        $fieldset->sections()->saveMany($this->sections);

        return $fieldset;
    }

    /**
     * Set fieldset name.
     *
     * @param  string  $name
     * @return \FieldsetFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a fieldset with the given sections.
     *
     * @param  array|\Illuminate\Support\Collection  $sections
     * @return \FieldsetFactory
     */
    public function withSections($sections)
    {
        $this->sections = $sections;

        return $this;
    }
}