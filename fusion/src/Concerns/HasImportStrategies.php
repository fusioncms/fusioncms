<?php

namespace Fusion\Concerns;

trait HasImportStrategies
{
    /**
     * @var array
     */
    protected $existingIds = [];

    /**
     * Add existing ID.
     *
     * @param  integer $id
     * @return void
     */
    protected function addExistingIds(...$ids)
    {
        array_push($this->existingIds, ...$ids);
    }

    /**
     * Determing if record exists.
     *
     * @param  mixed $id
     * @return boolean
     */
    protected function hasExistingId($id)
    {
        return $id !== null and in_array($id, $this->existingIds);
    }

    /**
     * Set existing IDs from storage.
     *
     * @param  array $existingIds
     * @return void
     */
    protected function setExistingIds(array $existingIds)
    {
        $this->existingIds = $existingIds;
    }

    /**
     * Return the set of existing IDs in storage.
     *
     * @return void
     */
    protected function getExistingIds()
    {
        return $this->existingIds;
    }

    /**
     * Determines if `strategies` have been selected.
     *
     * @param  array ...$strategies
     * @return boolean
     */
    protected function containsStrategies(...$strategies)
    {
        return count($strategies) === $this->import['strategy']->intersect(...$strategies)->count();
    }

    /**
     * Determine only if `strategies` have been selected.
     *
     * @param  array ...$strategy
     * @return boolean
     */
    protected function onlyContainsStrategies(...$strategies)
    {
        return $this->containsStrategies(...$strategies) and $this->import['strategy']->count() == count($strategies);
    }
}