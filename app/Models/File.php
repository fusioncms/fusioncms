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
use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;

class File extends Model
{
    use CachesQueries;

    protected $fillable = [
        'directory_id',
        'name',
        'slug',
        'uuid',
        'description',
        'location',
        'original',
        'extension',
        'mimetype',
    ];

    protected $appends = ['url'];

    public function getUrlAttribute()
    {
        return '/file/'.$this->uuid.'/'.$this->getAttribute('original');
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
     * A file belongs to a directory.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function directory()
    {
        return $this->belongsTo(Directory::class);
    }
}
