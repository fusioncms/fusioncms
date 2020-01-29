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

class SettingSection extends Model
{
	/**
     * The attributes that are guarded via mass assignment.
     *
     * @var array
     */
    protected $guarded = [];

   	/**
     * Setting Relationship.
     * @return mixed
     */
    public function settings() {
        return $this->hasMany(Setting::class, 'section_id', 'id');
    }
}
