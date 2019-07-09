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

use App\Models\Field;
use App\Models\Section;
use Illuminate\Database\Eloquent\Relations\Relation;

trait HasSections
{
    /**
     * The model instance can have many fields.
     *
     * @return MorphMany
     */
    public function sections()
    {
        return $this->morphMany(Section::class, 'container')->orderBy('order');
    }

    /**
     * Get all of the fields from sections.
     */
    public function fields()
    {
        return $this->hasManyThrough(Field::class, Section::class, 'container_id')->where('container_type', array_search(static::class, Relation::morphMap()) ?: static::class);
    }

    /**
     * Check if model has assigned fields.
     *
     * @return bool
     */
    public function hasSections()
    {
        return null !== @$this->sections;
    }

    /**
     * Check if model has assigned fields.
     *
     * @return bool
     */
    public function hasFields()
    {
        return null !== @$this->fields;
    }
}
