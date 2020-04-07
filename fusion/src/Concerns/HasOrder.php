<?php

namespace Fusion\Concerns;

trait HasOrder
{
    public function orderFirst()
    {
        $first = static::orderBy('order', 'asc')
            ->first();

        if (! $first) {
            return 1;
        }

        return $first->order - 1;
    }

    public function orderLast()
    {
        $last = static::orderBy('order', 'desc')
            ->first();

        if (! $last) {
            return 1;
        }

        return $last->order + 1;
    }

    public function orderAfter()
    {
        $adjacent = self::where('order', '>', $this->order)
            ->orderBy('order', 'asc')
            ->first();

        if (! $adjacent) {
            return static::orderBy('order', 'desc')
                ->first()
                ->order + 1;
        }

        return ($this->order + $adjacent->order) / 2;
    }

    public function orderBefore()
    {
        $adjacent = self::where('order', '<', $this->order)
            ->orderBy('order', 'desc')
            ->first();

        if (! $adjacent) {
            return $this->orderFirst();
        }

        return ($this->order + $adjacent->order) / 2;
    }
}