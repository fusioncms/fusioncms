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

use App\Foundation\Concerns\HasAuthor;
use App\Foundation\Database\Eloquent\Model;

class Directory extends Model
{
    use HasAuthor;

    /**
     * Fillable fields for Directory model.
     * @var
     */
    protected $fillable = ['parent_id', 'name', 'slug'];

    /**
     * @var bool
     */
    protected $searchable = false;

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            foreach ($model->assets as $asset) {
                $asset->delete();
            }

            foreach ($model->children as $child) {
                $child->delete();
            }
        });
    }

    /**
     * Relationship to Assets.
     *
     * @return Builder
     */
    public function assets()
    {
        return $this->hasMany(Asset::class);
    }

    /**
     * Relationship to parent Directory.
     *
     * @return Builder
     */
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    /**
     * Relationship to child Directories.
     *
     * @return Builder
     */
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    /**
     * Get permission created for Model.
     *
     * @return Collection
     */
    public function getPermissionsAttribute()
    {
        return collect($this->findPermission('list')->handle);
    }

    /**
     * Get roles based on permissions.
     *
     * @return Collection
     */
    public function getRolesAttribute()
    {
        return Role::whereHas('permissions', function ($query) {
            $query->whereIn('handle', $this->permissions);
        })->get();
    }
}
