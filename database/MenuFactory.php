<?php

use App\Models\Menu;
use App\Models\Fieldset;
use App\Contracts\Factory;
use Illuminate\Support\Str;

class MenuFactory implements Factory
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
     * Create a new Menu factory.
     *
     * @return \App\Models\Menu
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = Str::snake($this->name);
        }

        $menu = factory(Menu::class)->create($overrides);

        return $menu;
    }

    /**
     * Create a form with the given name.
     *
     * @param  string  $name
     * @return \MenuFactory
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
     * @return \MenuFactory
     */
    public function withFieldset(Fieldset $fieldset)
    {
        $this->fieldset = $fieldset;

        return $this;
    }
}