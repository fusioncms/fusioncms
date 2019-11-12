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

class Import extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'source',
        'schedule',
        'module',
        'group',
        'strategy',
        'preview',
        'mappings',
        'backup',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'strategy' => 'collection',
        'preview'  => 'collection',
        'mappings' => 'collection',
        'backup'   => 'boolean',
    ];

    /**
     * Has Many relationship.
     * 
     * @return Builder
     */
    public function logs()
    {
        return $this->hasMany(ImportLog::class);
    }
}
