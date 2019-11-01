<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Builders;

use App\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Contracts\Builder as BuilderContract;

abstract class Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $namespace;

    /**
     * @var array
     */
    protected $relationships = [];

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

    /**
     * @return array
     */
    public function getTraitImportStatements()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getTraitUseStatements()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getWith()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getDates()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getRelationships()
    {
        return $this->relationships;
    }

    /**
     * @return bool
     */
    public function hasRelationships()
    {
        return count($this->getRelationships()) > 0;
    }

    /**
     * @return self
     */
    public function addRelationship($field, $type)
    {
        $this->relationships[$field->handle] = [
            $field,
            $type,
        ];

        return $this;
    }

    /**
     * @return string
     */
    public function generateRelationships()
    {
        if (! $this->hasRelationships()) {
            return '';
        }

        $relationships = $this->getRelationships();
        $generated     = '';

        foreach ($relationships as $handle => list($field, $fieldtype)) {
            $namespace = $fieldtype->namespace.'\\'.Str::studly($handle);
            $stub      = File::get(resource_path('stubs/relationships/'.$fieldtype->relationship.'.stub'));

            // This value can't be hardcoded to querying the Taxonomy model
            // instance. We'll need to create a standard API as a means to
            // query the proper Eloquent model and retrievable value.
            $model = Taxonomy::find($field->settings['taxonomy']);

            if (! $model) continue;

            $contents = strtr($stub, [
                '{handle}'                    => $handle,
                '{studly_handle}'             => Str::studly($handle),
                '{related_namespace}'         => $namespace,
                '{related_table}'             => $model->pivot_table,
            ]);

            $generated .= $contents."\n\n";
        }
        
        return trim($generated);
    }
}
