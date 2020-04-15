<?php

namespace Fusion\Concerns;

use Fusion\Observers\CacheObserver;
use Fusion\Services\Cache\QueryCache;
use Fusion\Services\Cache\QueryCacheBuilder;

trait CachesQueries
{
    /**
     * Boot the trait.
     *
     * @return void
     */
    public static function bootCacheable()
    {
        static::observe(new CacheObserver);
    }

    /**
     * Returns the cache store.
     *
     * @return null|string
     */
    public function getCacheStore()
    {
        if (isset($this->cacheStore)) {
            return $this->cacheStore;
        }
    }

    /**
     * Returns if the cache should be automatically
     * busted or not on create/update/delete events.
     *
     * @return bool
     */
    public function getCacheBusting()
    {
        if (isset($this->cacheBusting)) {
            return $this->cacheBusting;
        }

        return true;
    }

    /**
     * Get the length of time the cache will be stored.
     *
     * @return int
     */
    public function getCacheLength()
    {
        if (isset($this->cacheLength)) {
            return $this->cacheLength;
        }

        return 30;
    }

    /**
     * Overrides the default QueryBuilder instance to
     * decorate with our caching layer.
     *
     * @return QueryCacheBuilder
     */
    protected function newBaseQueryBuilder()
    {
        $connection = $this->getConnection();
        $grammar    = $connection->getQueryGrammar();

        return new QueryCacheBuilder(
            $this->queryCache(),
            $connection,
            $grammar,
            $connection->getPostProcessor()
        );
    }

    /**
     * Generates a new QueryCache instance.
     *
     * @return QueryCache
     */
    public function queryCache()
    {
        return new QueryCache($this->getCacheStore(), $this->getCacheLength());
    }

    /**
     * Flush the cache if auto-busting is true on create/update events.
     *
     * @param  array  $options
     * @return void
     */
    public function finishSave(array $options)
    {
        $results = parent::finishSave($options);

        if ($this->getCacheBusting()) {
            $this->queryCache()->flush($this->getTable());
        }

        return $results;
    }

    /**
     * Flush the cache on delete events.
     *
     * @return bool|null
     */
    public function delete()
    {
        $results = parent::delete();

        if ($this->getCacheBusting()) {
            $this->queryCache()->flush($this->getTable());
        }

        return $results;
    }

    /**
     * Returns the status of the cache busting state.
     *
     * @return bool
     */
    public function isBusting()
    {
        return $this->getCacheBusting();
    }

    /**
     * Flush the cache.
     *
     * @return self
     */
    public function flush()
    {
        $this->queryCache()->flush($this->getTable());

        return $this;
    }
}
