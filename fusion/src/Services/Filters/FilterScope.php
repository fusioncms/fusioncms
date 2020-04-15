<?php

namespace Fusion\Services\Filters;

use Illuminate\Database\Eloquent\Builder;

trait FilterScope
{
    /**
     * Apply the scope to the given Eloquent query builder.
     *
     * @param  Builder  $builder
     * @param  Filter  $filters
     * @return void
     */
    public function scopeFilter(Builder $builder, Filter $filters)
    {
        return $filters->apply($builder);
    }
}
