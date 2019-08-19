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

class Directory extends Model
{
    /**
     * Fillable fields for Directory model.
     * @var
     */
    protected $fillable = ['parent_id', 'name', 'slug'];

    /**
     * @var bool
     */
    protected $searchable = false;

    protected $with = ['parent'];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            foreach ($model->files as $file) {
                $file->delete();
            }

            foreach ($model->children as $child) {
                $child->delete();
            }
        });
    }

    /**
     * A directory has many files.
     *
     * @return Builder
     */
    public function files()
    {
        return $this->hasMany(File::class);
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

    public function scopeRoots()
    {

    }
}
