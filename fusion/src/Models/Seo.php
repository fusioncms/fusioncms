<?php

namespace Fusion\Models;

use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;

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
