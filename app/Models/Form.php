<?php

namespace App\Models;

use App\Concerns\HasFieldset;
use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;

class Form extends Model
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
        'description',
        'anonymous',
        'confirmation_message',
        'redirect_on_submission',
        'redirect_url',
        'send_to',
        'reply_to',
        'form_template',
        'thankyou_template',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'anonymous'              => 'boolean',
        'redirect_on_submission' => 'boolean',
    ];

    /**
     * Get the builder instance.
     * 
     * @return Model
     */
    public function getBuilder()
    {
        $builder = new \App\Services\Builders\Form($this->handle);

        return $builder->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return 'form_' . $this->handle;
    }

    /**
     * Forms have many responses.
     * 
     * @return HasManyRelationship
     */
    public function responses()
    {
        $model = $this->getBuilder();
        $class = new \ReflectionClass($model);

        return $this->hasMany('\\'.$class->getName());
    }
}
