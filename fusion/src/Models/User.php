<?php

namespace Fusion\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Fusion\Concerns\HasDynamicRelationships;
use Illuminate\Database\Eloquent\Builder;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Traits\CausesActivity;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Fusion\Concerns\MustVerifyEmail as UserMustVerifyEmail;
use Caffeinated\Shinobi\Concerns\HasRolesAndPermissions;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasRolesAndPermissions,
        UserMustVerifyEmail,
        HasApiTokens,
        Notifiable,
        HasDynamicRelationships,
        LogsActivity,
        CausesActivity;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'status',
        'logged_in_at',
        'invalidly_logged_in_at',
        'password_changed_at',
        'email_verified_at',
        'invalid_logins',
        'fields',
        'settings',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'fields'   => 'collection',
        'settings' => 'collection',
    ];

    protected $appends = [
        'role',
        'verified',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'logged_in_at',
        'invalidly_logged_in_at',
        'password_changed_at',
    ];

    /**
     * Presenter instance.
     *
     * @var string
     */
    protected $presenter = 'Fusion\Presenters\UserPresenter';

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The description to be recorded to the activity log.
     *
     * @var array
     */
    protected $activityDescription = '{{ ucfirst($activity->event) }} the user <b>{{ $subject->name }}</b>.';

    /**
     * @var bool
     */
    protected $searchable = false;

    /**
     * Returns the age of the account.
     *
     * @return string
     */
    public function getAccountAgeAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    /**
     * Returns the URL to the user's Gravatar.
     *
     * @param  int $size
     * @return string
     */
    public function gravatar($size = 30)
    {
        $email = md5($this->email);

        return "//www.gravatar.com/avatar/{$email}?s={$size}";
    }

    public function getRoleAttribute()
    {
        return $this->roles->first();
    }

    public function getVerifiedAttribute()
    {
        return ! is_null($this->email_verified_at);
    }

    /**
     * Scope to query resource.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearchQuery(Builder $query, $value)
    {
        return $query
            ->where('name', 'like', "%{$value}%")
            ->orWhere('email', 'like', "%{$value}%");
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
        $properties = ['icon' => 'users'];

        if ($eventName !== 'deleted') {
            $properties['link'] = "users/{$subject->id}/edit";
        }

        $activity->description = "{$action} user account ({$subject->name})";
        $activity->properties  = $properties;
    }
}
