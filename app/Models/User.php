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

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Concerns\HasDynamicRelationships;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Concerns\MustVerifyEmail as UserMustVerifyEmail;
use Caffeinated\Shinobi\Concerns\HasRolesAndPermissions;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasRolesAndPermissions,
        UserMustVerifyEmail,
        HasApiTokens,
        Notifiable,
        HasDynamicRelationships;

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
    protected $presenter = 'App\Presenters\UserPresenter';

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

    /**
     * A user has many activities.
     *
     * @return self
     */
    public function activity()
    {
        return $this->hasMany(config('activitylog.activity_model'), 'causer_id');
    }
}
