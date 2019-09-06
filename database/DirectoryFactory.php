<?php

use App\Models\Directory;
use App\Contracts\Factory;
use Illuminate\Support\Str;

class DirectoryFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * Create a new File factory.
     * 
     * @return \App\Models\File
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name'] = $this->name;
            $overrides['slug'] = Str::slug($this->name);
        }

        return factory(Directory::class)->create($overrides);
    }

    /**
     * Create a file with the given name.
     * 
     * @param  string  $name
     * @return \FileFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }
}