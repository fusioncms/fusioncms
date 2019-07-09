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

use App\Foundation\Database\Eloquent\Model;

class Notification extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'handle', 'description', 'permissions'];

    /**
     * @var array
     */
    protected $casts = [
        'permissions' => 'collection',
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'system_notifications';

    /**
     * @var bool
     */
    protected $searchable = false;

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
