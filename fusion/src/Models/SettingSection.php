<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;

class SettingSection extends Model
{
	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'name', 'handle', 'group', 'icon', 'description' ];

   	/**
     * Setting Relationship.
     * @return mixed
     */
    public function settings() {
        return $this->hasMany(Setting::class, 'section_id', 'id');
    }
}
