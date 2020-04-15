<?php

namespace Fusion\Services\Filters;

trait DefaultFilters
{
    public function _sort($keys)
    {
        $_sort = request()->get('_sort');

        foreach (explode(',', $_sort) as $element) {
            $pairs = explode(':', $element);

            $key       = $pairs[0];
            $direction = $pairs[1] ?? 'asc';
            $pair      = [$key, $direction];
            $fillable  = $this->builder->getModel()->getFillable();

            if (in_array($key, $fillable)) {
                call_user_func_array([$this->builder, 'orderBy'], $pair);
            }
        }
    }

    public function _filter()
    {
        $_filter = request()->get('_filter');

        foreach (explode(',', $_filter) as $element) {
            $pairs = explode(':', $element);

            $key        = $pairs[0];
            $comparison = $pairs[1] ?? null;
            $value      = $pairs[2] ?? null;

            if (is_null($comparison)) {
                continue;
            }

            if (is_null($value)) {
                $value      = $comparison;
                $comparison = 'eq';
            }

            switch ($comparison) {
                case 'gt':
                    $comparison = '>';
                    break;
                case 'gte':
                    $comparison = '>=';
                    break;
                case 'lt':
                    $comparison = '<';
                    break;
                case 'lte':
                    $comparison = '<=';
                    break;
                default:
                    $comparison = '=';
                    break;
            }

            $pair      = [$key, $comparison, $value];
            $fillable  = $this->builder->getModel()->getFillable();

            if (in_array($key, $fillable)) {
                call_user_func_array([$this->builder, 'where'], $pair);
            }
        }
    }
}
