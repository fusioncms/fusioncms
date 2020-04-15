<?php

namespace Fusion\Services\Cache;

use Illuminate\Database\Query\Builder;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Database\Query\Grammars\Grammar;
use Illuminate\Database\Query\Processors\Processor;

class QueryCacheBuilder extends Builder
{
    /**
     * @var QueryCache
     */
    protected $cache;

    /**
     * Create a new QueryCacheBuilder instance.
     *
     * @param  QueryCache  $cache
     * @param  ConnectionInterface  $connection
     * @param  Grammar  $grammar
     * @param  Processor  $processor
     */
    public function __construct(QueryCache $cache, ConnectionInterface $connection, Grammar $grammar, Processor $processor)
    {
        $this->cache = $cache;

        parent::__construct($connection, $grammar, $processor);
    }

    /**
     * Generate a new query builder.
     *
     * @return static
     */
    public function newQuery()
    {
        return new static($this->cache, $this->connection, $this->grammar, $this->processor);
    }

    /**
     * Return the query results.
     *
     * @param  array  $columns
     * @return Collection
     */
    public function get($columns = ['*'])
    {
        return $this->cache->get($this, $columns);
    }

    /**
     * Put the query's results in random order.
     *
     * @param  string  $seed
     * @return self
     */
    public function inRandomOrder($seed = '')
    {
        $this->dontRemember();

        return parent::inRandomOrder($seed);
    }

    /**
     * Remember (cache) the query for X minutes.
     *
     * @param  int  $minutes
     * @return self
     */
    public function remember($minutes)
    {
        $this->cache->length($minutes);

        return $this;
    }

    /**
     * Remember (cache) the query forever (10 years, actually).
     *
     * @return self
     */
    public function rememberForever()
    {
        $this->cache->length(60 * 24 * 365 * 10);

        return $this;
    }

    /**
     * Do not cache the query.
     *
     * @return self
     */
    public function dontRemember()
    {
        $this->cache->disable();

        return $this;
    }
}
