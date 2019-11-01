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

use App\Database\Eloquent\Model;
use App\Concerns\HasDynamicRelationships;

class Fieldset extends Model
{
    use HasDynamicRelationships;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'handle'];

    /**
     * A fieldset is polymorphic.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function fieldsettable()
    {
        return $this->morphTo();
    }

    /**
     * A fieldset has many sections.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    /**
     * Get all of the fields from sections.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function fields()
    {
        return $this->hasManyThrough(Field::class, Section::class);
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

    /**
     * Return the fields that generate database columns.
     * 
     * @return self
     */
    public function database()
    {
        return $this->fields->reject(function($field) {
            return is_null($field->type()->getColumn());
        });
    }

    /**
     * Return the fields that define relationships.
     * 
     * @return self
     */
    public function relationships()
    {
        return $this->fields->reject(function($field) {
            return is_null($field->type()->getRelationship());
        });
    }
}
