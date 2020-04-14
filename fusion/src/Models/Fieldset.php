<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Fusion\Concerns\HasDynamicRelationships;
use Spatie\Activitylog\Traits\LogsActivity;

class Fieldset extends Model
{
    use HasDynamicRelationships, LogsActivity;

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

    /**
     * Tap into activity before persisting to database.
     *
     * @param  \Spatie\Activitylog\Models\Activity $activity
     * @param  string   $eventName
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $subject    = $activity->subject;
        $action     = ucfirst($eventName);
        $properties = ['icon' => 'list'];

        if ($eventName !== 'deleted') {
            $properties['link'] = "fieldsets/{$subject->id}/edit";
        }

        $activity->description = "{$action} fieldset ({$subject->name})";
        $activity->properties  = $properties;
    }
}
