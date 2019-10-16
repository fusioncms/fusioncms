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
        return count($this->relationships) > 0;
    }

    /**
     * @return self
     */
    public function addRelationship($handle, $type)
    {
        $this->relationships[$handle] = $type;

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

        foreach ($relationships as $handle => $fieldtype) {
            $namespace = $fieldtype->namespace.'\\'.Str::studly($handle);
            $stub      = File::get(resource_path('stubs/relationships/'.$fieldtype->relationship.'.stub'));

            $contents = strtr($stub, [
                '{handle}'            => $handle,
                '{related_namespace}' => $namespace,
                '{tag}'               => $this->addAbleSuffixToWord($handle),
            ]);

            $generated .= $contents."\n\n";
        }
        
        return trim($generated);
    }

    /**
     * Properly suffixes the given word with "-able".
     * 
     * @param  string  $word
     * @return string
     */
    protected function addAbleSuffixToWord($word)
    {
        $temp               = Str::singular(strtolower($word));
        $lastLetter         = $temp[strlen($temp) - 1];
        $secondToLastLetter = $temp[strlen($temp) - 2];

        $vowels     = ['a', 'e', 'i', 'o', 'u'];
        $consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

        $exceptions = [
            'category' => 'categorizable',
        ];

        if (array_key_exists($temp, $exceptions)) {
            return $exceptions[$temp];
        }

        if ($lastLetter == 'y') {
            if (in_array($secondToLastLetter, $consonants)) {
                $temp = substr_replace($temp, '', -2);
                
                return $temp.'iable';
            }

            return $temp.'able';
        }

        if ($lastLetter == 'e') {
            $temp = substr_replace($temp, '', -1);
                
            return $temp.'able';
        }

        $exceptions = ['color', 'tax'];

        if (! in_array($temp, $exceptions)
            and in_array($lastLetter, $consonants)
            and in_array($secondToLastLetter, $vowels)
        ) {
            return $temp.$lastLetter.'able';
        }

        return $temp.'able';
    }
}
