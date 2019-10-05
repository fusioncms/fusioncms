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

use Illuminate\Support\Str;
use App\Concerns\HasFieldset;
use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;

class Taxonomy extends Model
{
    use CachesQueries, HasFieldset;

    protected $with = ['fieldsets'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'slug',
        'description',
        'fieldset_id',
        'sidebar',
        'icon',
        'route',
        'template'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'sidebar' => 'boolean',
    ];

    public function getBuilder()
    {
        $builder = new \App\Services\Builders\Taxonomy($this->handle);

        return $builder->make();
    }

    public function getAdminPathAttribute()
    {
        return '/taxonomies/' . $this->handle;
    }

    /**
     * Get the "slug" attribute value.
     *
     * @return string
     */
    public function getSlugAttribute()
    {
        return Str::slug($this->handle);
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return 'taxonomy_' . $this->handle;
    }
}
