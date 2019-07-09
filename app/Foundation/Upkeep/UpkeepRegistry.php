<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Upkeep;

use Exception;
use ReflectionClass;

class UpkeepRegistry
{
    /**
     * The upkeep registry stack.
     *
     * @var array
     */
    protected $tasks;

    /**
     * Create a new UpkeepRegistry instance.
     */
    public function __construct()
    {
        $this->tasks = collect([]);
    }

    /**
     * Register a new upkeep task within the registry.
     *
     * @param  string  $name
     * @param  UpkeepTask  $task
     * @return self
     */
    public function register($task)
    {
        if ($this->tasks->search($task) === false) {
            $instance = new $task;
            $reflect  = new ReflectionClass($instance);

            $this->tasks->put($reflect->getShortName(), $instance);
        }

        return $this;
    }

    /**
     * Get the given upkeep task from the registry.
     *
     * @param  string  $task
     * @return mixed
     */
    public function get($task)
    {
        $instance = $this->tasks->get($task);

        if (! is_null($instance)) {
            return $instance;
        }

        throw new Exception('Upkeep task not found in registry. [' . $task . ']');
    }

    public function __call($method, $arguments)
    {
        return call_user_func_array([$this->tasks, $method], $arguments);
    }
}
