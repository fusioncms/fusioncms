<?php

use App\Models\Section;
use App\Models\Fieldset;
use App\Contracts\Factory;

class FieldsetFactory implements Factory
{
    /**
     * Create a new Fieldset factory.
     * 
     * @return \App\Models\Fieldset
     */
    public function create()
    {
        $fieldset = factory(Fieldset::class)->create();
        $sections = factory(Section::class, 3)->create();

        $fieldset->sections()->saveMany($sections);

        return $fieldset;
    }
}