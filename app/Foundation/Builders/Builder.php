<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Builders;

use Illuminate\Support\Facades\Str;
use App\Foundation\Contracts\Builder as BuilderContract;

abstract class Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $namespace;

    /**
     * Create a new Builder instance.
     */
    public function __construct()
    {
        if (empty($this->namespace)) {
            throw new Exception('Please specify your builder\'s base namespace.');
        }
    }

    /**
     * Make a new model instance.
     */
    abstract public function make();

    /**
     * Get the fully qualified class.
     *
     * @return string
     */
    public function getClass()
    {
        $handle = $this->collection;

        if ($this->type) {
            $handle .= '_' . $this->type;
        }

        $className = Str::studlyCase($handle);

        return $this->namespace . '\\' . $className;
    }

    /**
     * Set the root namespace.
     *
     * @param  string  $namespace
     * @return self
     */
    public function setNamespace($namespace)
    {
        $this->namespace = $namespace;

        return $this;
    }

    /**
     * Get the root namespace.
     *
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    public function getTraitImportStatements()
    {
        return [];
    }

    public function getTraitUseStatements()
    {
        return [];
    }

    public function getWith()
    {
        return [];
    }
}
