<?php

use App\Models\Section;
use App\Models\Fieldset;
use App\Contracts\Factory;
use Facades\SectionFactory;

class FieldsetFactory implements Factory
{
    protected $sections;

    /**
     * Create a new Fieldset factory.
     * 
     * @return \App\Models\Fieldset
     */
    public function create()
    {
        $fieldset = factory(Fieldset::class)->create();

        if (! $this->sections) {
            $this->sections = SectionFactory::times(3)->create();
        }

        $fieldset->sections()->saveMany($this->sections);

        return $fieldset;
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