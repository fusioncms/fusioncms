<?php

use App\Models\Field;
use App\Models\Section;
use App\Contracts\Factory;

class SectionFactory implements Factory
{
    protected $times = 3;
    protected $fields;

    /**
     * Create a new Section factory.
     * 
     * @return \App\Models\Section
     */
    public function create()
    {
        $sections = factory(Section::class, $this->times)->create();

        foreach ($sections as $index => $section) {
            $this->fields[$index] = factory(Field::class, 3)->make()->toArray();

            $section->fields()->createMany($this->fields[$index]);
        } 

        return $sections;
    }

    /**
     * Create a section with the given fields.
     * 
     * @param  array  $fields
     * @return \SectionFactory
     */
    public function withFields(array $fields)
    {
        $this->fields = $fields;

        return $this;
    }

    /**
     * Create N number of instances.
     * 
     * @param  integer  $times
     * @return \SectionFactory
     */
    public function times($times)
    {
        $this->times = $times;

        return $this;
    }
}