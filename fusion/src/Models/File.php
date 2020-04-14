<?php

namespace Fusion\Models;

use Storage;
use Illuminate\Support\Str;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

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
        'bytes',
        'width',
        'height',
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

    /**
     * Scope to query search filter.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearchQuery(Builder $query, $value)
    {
        return $query
            ->where('name', 'like', "%{$value}%")
            ->orWhere('description', 'like', "%{$value}%");
    }

    /**
     * Scope to query display type.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeDisplayQuery(Builder $query, $value)
    {
        switch ($value) {
            case 'documents':
                $displays = ['text', 'application'];
                break;
            default:
                $displays = [ Str::singular($value) ];
                break;
        }

        foreach ($displays as $display) {
            $query->where('mimetype', 'like', "{$display}%");
        }

        return $query;
    }
}
