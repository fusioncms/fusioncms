<?php

namespace Fusion\Database\Eloquent;

use Fusion\Concerns\HasDynamicRelationships;
use Illuminate\Database\Eloquent\Model as EloquentModel;

class Model extends EloquentModel
{
    use HasDynamicRelationships;

    /**
     * @var Model
     */
    public $model;

    /**
     * Create a new Eloquent model instance.
     *
     * @param  array  $attributes
     * @return void
     */
    public function __construct(array $attributes = [])
    {
        $this->model = $this;

        parent::__construct($attributes);
    }

    /**
     * Boot the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();
    }

    /**
     * Set the casts attributes for the model.
     *
     * @param  array  $casts
     * @return $this
     */
    public function casts(array $casts)
    {
        $this->casts = $casts;

        return $this;
    }

    /**
     * Get a timezone converted time.
     *
     * @param $attribute
     * @param null $timezone
     * @return mixed
     */
    public function getDate($attribute, $timezone = null)
    {
        return $this->$attribute->timezone($timezone ?: setting('system.time_zone'));
    }
}
