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

use Illuminate\Support\Str;
use App\Foundation\Concerns\CachesQueries;
use App\Foundation\Database\Eloquent\Model;

class Type extends Model
{
    use CachesQueries;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'matrix_id',
        'name',
        'handle',
        'description',
    ];

    /**
     * A type belongs to a matrix.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function matrix()
    {
        return $this->belongsTo(Matrix::class);
    }

    /**
     * Get the "slug" attribute value.
     *
     * @return string
     */
    public function getSlugAttribute()
    {
        return Str::slug($this->handle);
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return $this->matrix->table . '_' . $this->handle;
    }
}
