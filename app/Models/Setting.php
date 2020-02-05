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

class Setting extends Model
{
    use CachesQueries;

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
}
