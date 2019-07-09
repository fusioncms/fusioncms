<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Seo;

use Request;
use App\Models\Seo;

trait Seoable
{
    /**
     * Boot the Seoable trait.
     *
     * @return void
     */
    public static function bootSeoable()
    {
        static::saved(function ($model) {
            $model->saveSEO();
        });

        static::deleted(function ($model) {
            $model->deleteSEO();
        });
    }

    /**
     * Get the SEO profile associated with the model.
     *
     * @return Seo
     */
    public function seo()
    {
        return $this->morphOne(Seo::class, 'seoable');
    }

    /**
     * Create a new SEO profile for the model.
     *
     * @return void
     */
    protected function saveSEO()
    {
        if (! Request::has('seo_slug')) {
            return;
        }

        if (! $seo = $this->seo()->first()) {
            $seo = new Seo;
        }

        $seo->slug        = Request::get('seo_slug');
        $seo->title       = Request::get('seo_title');
        $seo->description = Request::get('seo_description');
        $seo->keywords    = Request::get('seo_keywords');

        $this->seo()->save($seo);
    }

    /**
     * Delete the associated SEO profile.
     *
     * @return void
     */
    protected function deleteSEO()
    {
        if ($seo = $this->seo()->first()) {
            $seo->delete();
        }
    }
}
