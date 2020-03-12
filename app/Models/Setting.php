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

use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Setting extends Model
{
    use CachesQueries, LogsActivity;

    /**
     * The attributes that are guarded via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'section_id',
        'name',
        'handle',
        'group',
        'override',
        'component',
        'description',
        'type',
        'options',
        'default',
        'value',
        'required',
        'gui',
        'order'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'required' => 'boolean',
        'gui'      => 'boolean',
        'options'  => 'collection',
    ];

    /**
     * SettingSection Relationship.
     * 
     * @return Builder|SettingSection
     */
    public function section() {
        return $this->belongsTo(SettingSection::class);
    }

    /**
     * Just log update event.
     * 
     * @var array
     */
    protected static $recordEvents = ['updated'];

    /**
     * Tap into activity before persisting to database.
     * 
     * @param  \Spatie\Activitylog\Models\Activity $activity
     * @param  string   $eventName
     * @return void             
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $setting = $activity->subject;
        $section = $setting->section;
        $action  = ucfirst($eventName);

        $activity->description = "{$action} {$section->name} settings";
        $activity->properties  = [
            'icon' => 'cog',
            'link' => 'settings'
        ];
    }
}
