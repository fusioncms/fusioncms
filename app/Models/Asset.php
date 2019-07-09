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

use Storage;
use App\Concerns\HasAuthor;
use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;

class Asset extends Model
{
    use HasAuthor, CachesQueries;

    /**
     *	Fillable fields for Asset model.
     *
     *	@var
     */
    protected $fillable = [
        'directory_id',
        'name',
        'slug',
        'description',
        'location',
        'original',
        'extension',
        'mimetype',
    ];

    /**
     * @var bool
     */
    protected $searchable = false;

    protected $appends = ['url'];

    public function getUrlAttribute()
    {
        return Storage::url($this->location);
    }

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            Storage::delete($model->location);
        });
    }

    /**
     * Relationship to Directories.
     *
     * @return Builder
     */
    public function directories()
    {
        return $this->belongsToMany(Directory::class);
    }

    /**
     * Return the path to the image.
     */
    public function path()
    {
        return route('assets.asset', $this->slug);
    }

    public function storagePath()
    {
        return storage_path('uploads/' . $this->location);
    }
}
