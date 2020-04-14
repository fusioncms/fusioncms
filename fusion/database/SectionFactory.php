<?php

use Fusion\Models\Field;
use Fusion\Models\Section;
use Fusion\Contracts\Factory;

class SectionFactory implements Factory
{
    protected $times = 3;
    protected $withoutFields = false;
    protected $fields;

    /**
     * Create a new Section factory.
     *
     * @return \Fusion\Models\Section
     */
    public function create()
    {
        $sections = factory(Section::class, $this->times)->create();

        if (! $this->withoutFields) {
            foreach ($sections as $index => $section) {
                if (! isset($this->fields[$index])) {
                    $this->fields[$index] = factory(Field::class, 3)->make()->toArray();
                }

                $section->fields()->createMany($this->fields[$index]);
            }
        }

        if ($this->times === 1) {
            return $sections->first();
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

    public function withoutFields()
    {
        $this->withoutFields = true;

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