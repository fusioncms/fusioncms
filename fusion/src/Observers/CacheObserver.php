<?php

namespace Fusion\Observers;

class CacheObserver
{
    /**
     * Handle the created event for the model.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function created($model)
    {
        static::bustCache($model);
    }

    /**
     * Handle the updated event for the model.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function updated($model)
    {
        static::bustCache($model);
    }

    /**
     * Handle the updated event for the model.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function saved($model)
    {
        static::bustCache($model);
    }

    /**
     * Handle the deleted event for the model.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function deleted($model)
    {
        static::bustCache($model);
    }

    /**
     * Bust the cache on the model.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public static function bustCache($model)
    {
        if ($model->getCacheBusting()) {
            $model->queryCache()->flush($model->getTable());
        }
    }
}
