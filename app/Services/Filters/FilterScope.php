<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Filters;

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
