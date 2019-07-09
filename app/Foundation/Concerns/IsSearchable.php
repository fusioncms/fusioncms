<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Concerns;

class IsSearchable
{
    /**
     * Listen to the creating event.
     *
     * @param  \App\Foundation\Database\Eloquent\Model  $model
     * @return void
     */
    public function creating($model)
    {
        if (! $model->isSearchable()) {
            $model::disableSearchSyncing();
        }
    }

    /**
     * Listen to the updating event.
     *
     * @param  \App\Foundation\Database\Eloquent\Model  $model
     * @return void
     */
    public function updating($model)
    {
        if (! $model->isSearchable()) {
            $model::disableSearchSyncing();
        }
    }
}
