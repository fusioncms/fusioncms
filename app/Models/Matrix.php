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

class Matrix extends Model
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
        'type',
        'fieldset_id',
        'sidebar',
        'quicklink',
        'icon',
        'route',
        'template',
        'revision_control',
        'categorizable',
        'creditable',
        'publishable',
        'seoable',
        'status',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'sidebar'          => 'boolean',
        'quicklink'        => 'boolean',
        'revision_control' => 'boolean',
        'categorizable'    => 'boolean',
        'creditable'       => 'boolean',
        'publishable'      => 'boolean',
        'seoable'          => 'boolean',
        'status'           => 'boolean',
    ];

    public function getBuilder()
    {
        $builder = new \App\Services\Builders\Page($this->handle);

        return $builder->make();
    }

    public function getAdminPathAttribute()
    {
        if ($this->type === 'page') {
            return '/pages/' . $this->handle;
        } else {
            return '/collections/' . $this->handle;
        }
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
        return 'mx_' . $this->handle;
    }
}
