<?php

use Fusion\Models\Directory;
use Fusion\Contracts\Factory;
use Illuminate\Support\Str;

class DirectoryFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var integer
     */
    protected $parent;

    /**
     * Create a new File factory.
     *
     * @return \Fusion\Models\File
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name'] = $this->name;
            $overrides['slug'] = Str::slug($this->name);
        }

        if ($this->parent) {
            $overrides['parent_id'] = $this->parent;
        }

        return factory(Directory::class)->create($overrides);
    }

    /**
     * Create a directory with the given name.
     *
     * @param  string  $name
     * @return \DirectoryFactory
     */
    public function withName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a directory with the given parent_id.
     *
     * @param  \Fusion\Models\Directory|integer  $parent
     * @return \DirectoryFactory
     */
    public function withParent($parent)
    {
        $this->parent = $parent instanceof Directory ? $parent->id : $parent;

        return $this;
    }
}