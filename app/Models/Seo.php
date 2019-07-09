<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Models;

use App\Foundation\Concerns\CachesQueries;
use App\Foundation\Database\Eloquent\Model;

class Seo extends Model
{
    use CachesQueries;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['title', 'slug', 'description', 'keywords'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'seo';

    /**
     * @var bool
     */
    protected $searchable = false;

    /**
     * Get all of the owning SEO profile models.
     */
    public function seoable()
    {
        return $this->morphTo();
    }
}
