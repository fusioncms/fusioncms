<?php

namespace Fusion\Services\Cache;

use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Collection;

class QueryCache
{
    /**
     * @var string
     */
    protected $store;

    /**
     * @var int
     */
    protected $length = 30;

    /**
     * Create a new QueryCache instance.
     *
     * @param  string  $store
     * @param  int  $length
     */
    public function __construct($store, $length)
    {
        $this->store  = $store;
        $this->length = $length;
    }

    /**
     * Returns the status of the cache.
     *
     * @return bool
     */
    public function enabled()
    {
        $length  = $this->length === 0 ? false : true;
        $setting = env('CACHE_ENABLED', true);

        return ($length === true) and ($setting === true);
    }

    /**
     * Set the length of the cache.
     *
     * @param  int  $minutes
     */
    public function length($minutes)
    {
        $this->length = $minutes;
    }

    /**
     * Enable and set the length of the cache.
     *
     * @param  int  $minutes
     */
    public function enable($minutes = 30)
    {
        $this->length($minutes);
    }

    /**
     * Disable the cache on the model.
     */
    public function disable()
    {
        $this->length = 0;
    }

    /**
     * Get the model results.
     *
     * @param  QueryCacheBuilder  $builder
     * @param  array  $columns
     * @return Collection
     */
    public function get(QueryCacheBuilder $builder, $columns = ['*'])
    {
        if (! $this->enabled()) {
            return $this->performQuery($builder, $columns);
        }

        $key   = $this->generateKey($builder, $columns);
        $cache = $this->getCache($builder);

        return $cache->remember($key, $this->length, function () use ($builder, $columns) {
            return $this->performQuery($builder, $columns);
        });
    }

    /**
     * Get the cache instance.
     *
     * @param  QueryCacheBuilder  $builder
     * @return Cache
     */
    protected function getCache(QueryCacheBuilder $builder)
    {
        return $this->isTaggable()
            ? Cache::store($this->store)->tags($this->getTag($builder))
            : Cache::store($this->store);
    }

    /**
     * Determine if the cache supports tagging.
     *
     * @return bool
     */
    protected function isTaggable()
    {
        return Cache::getStore() instanceof TaggableStore;
    }

    /**
     * Perform the query on the model.
     *
     * @param  QueryCacheBuilder  $builder
     * @param  array  $coumns
     * @return mixed
     */
    protected function performQuery(QueryCacheBuilder $builder, $columns = ['*'])
    {
        return call_user_func([$builder, 'parent::get'], $columns);
    }

    /**
     * Generate a key for cache tag support.
     *
     * @param  QueryCacheBuilder  $builder
     * @param  array  $columns
     * @return string
     */
    protected function generateKey(QueryCacheBuilder $builder, array $columns)
    {
        $query = json_encode([$builder->toSql() => $builder->getBindings()]);
        $key   = sha1($query);

        return $key;
    }

    /**
     * Returns the tag to the model cache.
     *
     * @param  QueryCacheBuilder  $builder
     * @return string
     */
    protected function getTag(QueryCacheBuilder $builder)
    {
        return $builder->from;
    }

    /**
     * Flush the cache on the model.
     *
     * @param  string  $tag
     * @return mixed
     */
    public function flush($tag)
    {
        if ($this->isTaggable()) {
            return Cache::tags($tag)->flush();
        }

        return Cache::flush();
    }
}
