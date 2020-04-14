<?php

namespace Fusion\Models;

use Fusion\Concerns\HasFieldset;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Form extends Model
{
    use CachesQueries, HasFieldset, LogsActivity;

    protected $with = ['fieldsets'];

    protected $appends = ['fieldset'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'handle',
        'description',
        'collect_email_addresses',
        'collect_ip_addresses',
        'response_receipt',
        'message',
        'redirect_on_submission',
        'redirect_url',
        'enable_recaptcha',
        'enable_honeypot',
        'send_to',
        'reply_to',
        'form_template',
        'thankyou_template',
        'status'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'collect_email_addresses' => 'boolean',
        'collect_ip_addresses'    => 'boolean',
        'response_receipt'        => 'boolean',
        'redirect_on_submission'  => 'boolean',
        'enable_recaptcha'        => 'boolean',
        'enable_honeypot'         => 'boolean',
        'status'                  => 'boolean',
    ];

    /**
     * Get the builder instance.
     *
     * @return Model
     */
    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Form($this->handle);

        return $builder->make();
    }

    public function path($additional = null)
    {
        $path = '/form/'.$this->slug;

        if ($additional) {
            $path .= '/'.$additional;
        }

        return $path;
    }

    public function thankyouPath()
    {
        return $this->path('thankyou');
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
        $properties = ['icon' => 'paper-plane'];

        if ($eventName !== 'deleted') {
            $properties['link'] = "forms/{$subject->id}/edit";
        }

        $activity->description = "{$action} form ({$subject->name})";
        $activity->properties  = $properties;
    }
}
