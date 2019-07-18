<?php

use App\Models\Matrix;
use App\Models\Fieldset;
use App\Contracts\Factory;

class MatrixFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var boolean
     */
    protected $asPage = false;

    /**
     * @var boolean
     */
    protected $asCollection = false;

    /**
     * @var \App\Models\Fieldset
     */
    protected $fieldset;

    /**
     * Create a new Matrix factory.
     * 
     * @return \App\Models\Matrix
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name'] = $this->name;
            $overrides['handle'] = str_handle($this->name);
        }

        if ($this->asCollection) {
            $overrides['type'] = 'collection';
        }

        if ($this->asPage) {
            $overrides['type'] = 'page';
        }

        if (! $this->fieldset) {
            $this->fieldset = factory(Fieldset::class)->create();
        }

        $matrix = factory(Matrix::class)->create($overrides);

        $matrix->attachFieldset($this->fieldset);

        return $matrix;
    }

    /**
     * Create a matrix with the given name.
     * 
     * @param  string  $name
     * @return \MatrixFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a matrix as a collection.
     * 
     * @return \MatrixFactory
     */
    public function asCollection()
    {
        $this->asCollection = true;

        return $this;
    }

    /**
     * Create a matrix as a page.
     * 
     * @return \MatrixFactory
     */
    public function asPage()
    {
        $this->asPage = true;

        return $this;
    }

    /**
     * Create a matrix with the given fieldset.
     * 
     * @param  \App\Models\Fieldset  $fieldset
     * @return \MatrixFactory
     */
    public function withFieldset(Fieldset $fieldset)
    {
        $this->fieldset = $fieldset;

        return $this;
    }
}