<?php

namespace Fusion\Concerns;

trait HasDynamicRelationships
{
    protected static $dynamicRelationships = [];

    public static function getRelationships()
    {
        return static::$dynamicRelationships;
    }

    public static function addRelationship($name, $closure)
    {
        static::$dynamicRelationships[$name] = $closure;
    }

    public static function hasDynamicRelationship($name)
    {
        return array_key_exists($name, static::$dynamicRelationships);
    }

    public function __get($name)
    {
        if (static::hasDynamicRelationship($name)) {
            if ($this->relationLoaded($name)) {
                return $this->relations[$name];
            }

            return $this->getRelationshipFromMethod($name);
        }

        return parent::__get($name);
    }

    public function __call($name, $arguments)
    {
        if (static::hasDynamicRelationship($name)) {
            return call_user_func(static::$dynamicRelationships[$name], $this);
        }

        return parent::__call($name, $arguments);
    }
}
